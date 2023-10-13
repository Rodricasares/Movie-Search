
const API = "https://api.themoviedb.org/3";
export function get(path){
    return fetch(API+path,{
        headers:{
            Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWM5ZjQ2MmY3MjJmYWU2OTU2OGZhZWE1OTFmN2JhYyIsInN1YiI6IjY1MjdkMDVjODEzODMxMDExYjQ5MzQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.okh05f7cxmIbI09hGSdQj64CkIW5UvcPnoiP5Pc0VOU',
            "Content-Type":"application/JSON;charset=utf-8"
          
        }
    }).then((result)=>result.json())
}
