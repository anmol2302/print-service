var velocity = require('velocityjs');

class Mapper{

    constructor(htmlFile,contextMap)
    {
        this.htmlFile= htmlFile;
        this.contextMap= contextMap;
    }


    replacePlaceholders(){
        var asts = velocity.parse(this.htmlFile);    
        var results = (new velocity.Compile(asts)).render(this.contextMap,null);
        return results;
    }
}
module.exports= Mapper;