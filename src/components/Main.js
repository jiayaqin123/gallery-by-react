require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');
//获取图片数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转换为图片url路径信息
imageDatas=((imageDatasArr) =>{
  for(let i=0,j=imageDatasArr.length;i<j;i++){
    let singleImageData=imageDatasArr[i];

    singleImageData.imageURL=require('../images/'+singleImageData.fileName);

    imageDatasArr[i]=singleImageData;
  }

  return imageDatasArr;
})(imageDatas);




class AppComponent extends React.Component {
  render() {
    return (
      /*<div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>hello1111222233333</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>*/
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
