// yea sbse pahle delaycolorchnge function ko call krega fr timeout lgega
// fr bckgrnd color fr agle ko call aise aise
const delayColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};
// hmne isme nesting kri h agr hm simple likhde to fr agr same time de 1000 to fr
// jo aakhri dege srf vhi code work krega ya to hm pahle color ko 1000 de fr 200
// fr 300 aiseaise lekin fr utna maths krna pdega islye simple nestimg krdii
delayColorChange("red", 1000, () => {
  delayColorChange("orange", 1000, () => {
    delayColorChange("yellow", 1000, () => {
      delayColorChange("green", 1000, () => {
        delayColorChange("blue", 1000, () => {
            delayColorChange('indigo' , 1000, () => {
                delayColorChange('violent' , 1000, () => {

                }); 
            }) ;
        });
      });
    });
  });
});


//fake request ... jyada nesting krne se error jldi aajata h
// forsafety hmne tne callbacks bna diye
searchMovieAPI('amadeous' , () => {
    saveToMyDB(movies ,()=>{
//if it works run this
    }, () => {
//if it dosnt wrk , run this
    })
}, () => {
    //if API is down or rqst is failed
})
