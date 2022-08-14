var fs = require("fs");
var path=require("path");
var http=require("http")
var app = http.createServer();



//存有美图链接的文件名img.txt

let pics=[];
let filename = "img.txt";
if(!fs.existsSync(filename)){
    console.log('文件不存在');
}
else{
    // 同步读取
    var data = fs.readFileSync(filename);
    let str=data.toString();
    this.pics=str.split('\r\n');
    let i=Math.floor(Math.random()*this.pics.length);
    let pic=this.pics[i];
    let ex=path.extname(pic);
    if(ex===".jpg"||ex==='.png')
    {
        console.log("是个图片")
        app.on('request', (req, res) => {
            res.writeHead(200, {
                'Content-Type': 'image/jpeg'
            },pic)
            res.end('ok');
        })

    }
    else console.log("不是图片")    
}
