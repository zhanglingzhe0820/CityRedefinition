import json

import gdal
import numpy as np

dataset = gdal.Open("osm_china_roadLength.tif")
im_width = dataset.RasterXSize  # 栅格矩阵的列数
im_height = dataset.RasterYSize  # 栅格矩阵的行数
geo_transform = dataset.GetGeoTransform()
origin_x = geo_transform[0]
origin_y = geo_transform[3]
pixel_width = geo_transform[1]
pixel_height = geo_transform[5]

input = []
feature_dicts = []
low_score = 100000
for line in open("RedefineCity.csv", "r"):
    position = line.split('",')[0][1:]
    value = float(line.split('",')[1])
    if value < low_score:
        low_score = value
    input.append([np.array(eval(position)), value])
print("读取完成……")

for line in input:
    center_x = 0
    center_y = 0
    for i in range(len(line[0])):
        center_x += line[0][i][0]
        center_y += line[0][i][1]
    center_x = origin_x + center_x / len(line[0]) * pixel_width
    center_y = origin_y + center_y / len(line[0]) * pixel_height
    center_value = (line[1] - low_score) * 100000
    print(center_value)
    feature_dict = {
        "type": "Feature",
        "properties": {
            "cum_conf": center_value,
            "latitude": center_y,
            "longitude": center_x
        },
        "geometry": {
            "type": "Point",
            "coordinates": [center_x, center_y]
        }
    }
    if center_value != 0:
        feature_dicts.append(feature_dict)

result_dict = {
    "type": "FeatureCollection",
    "features": feature_dicts
}

with open("result.json", "w") as f:
    json.dump(result_dict, f)
    print("转换完成……")
