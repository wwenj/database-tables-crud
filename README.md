# 前后端分离——基于mysql数据库的增删改查
## 项目截图

![预览截图](https://github.com/wwenj/database-tables-crud/blob/master/Screenshots/1.png)
![预览截图](https://github.com/wwenj/database-tables-crud/blob/master/Screenshots/2.png)
![预览截图](https://github.com/wwenj/database-tables-crud/blob/master/Screenshots/3.png)

## 技术栈
### 前端
  * **H/C/J** + **Es6**+**Jquery**
### 后端
* **Node.js**+**Express框架**+**Mysql数据库**

## 功能实现
* **新增数据:** 弹出层填写新增行数据，点击确定新增一行然后查询刷新
* **删除数据:** 根据当前行id直接从数据库删除一行然后查询刷新
* **更改数据** 根据弹出层的当前行信息进行修改然后查询刷新(暂未完成)
* **取消选定:** 取消当前行选中状态

## 目录说明
* **view/ 最简单的前端代码目录，server目录服务器开启后双击打开页面即可**  
* **server/ 后端目录下载依赖后npm start即可启动服务器**  
**其他目录即可忽略**
## 使用步骤


``` bash
# 安装依赖
npm install

# 服务器端运行打开 localhost:3001
npm run start

#打开前端页面

```

作者 [[ wwenj ]](http://www.wwenj.com/) <br>
2018 年 1月 29日