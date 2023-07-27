const movies = [
    {
        title : 'Bhool bhulaiya' ,
        score : 99 ,
        year : 1984 
    } ,
    {
        title : 'waterworld' ,
        score : 62 ,
        year : 1995
    },
    {
        title : 'kuch kuch hota hai' ,
score :55 ,
year : 2019
    } ,
]
// filter use krne se khud flter hori h cndtio dalke ki which one is goodmovie or badmovie
const goodMovies = movies.filter(m => m.score > 80)
const goodTitle = goodMovies.map(m => m.title)
// abi hmne alg alg use kia filter aur mapp ka ek sath b kr skte h
// movies.filter(m => m.score > 80).map(m => m.title) ;
const badMovies = movies.filter(m => m.score <70)
const recentMovies = movies.filter(m => year > 1996)