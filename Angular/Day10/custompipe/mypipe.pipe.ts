import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})
export class MyPipe implements PipeTransform
{
    transform(value: any, lowerlimit:number=0,upperlimit:number=20) {
        
        if(value==null){
            return null;
        }

        let tempvalue= (<string> value);

        let actualLowerlimit=(lowerlimit)?lowerlimit:0;
        let actualUpperlimit=(upperlimit)?upperlimit:20;


        return tempvalue.substring(lowerlimit,upperlimit)+" ...";

        // return tempvalue.substring(actualLowerlimit,actualUpperlimit)+" ...";
        // return tempvalue.substring(0,10)+" ...";

    }

}