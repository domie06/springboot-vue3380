const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaxiangtecan/",
            name: "jiaxiangtecan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaxiangtecan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家乡特产网上商城"
        } 
    }
}
export default base
