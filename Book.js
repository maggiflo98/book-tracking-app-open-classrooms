export class Book {
    constructor(title,author,description,string,pagesNumber,currentPage,read){
     this.title=title;
     this.author=author;
     this.description=description;
     this.string=string;
     this.pagesNumber=pagesNumber;
     this.currentPage=currentPage;
     this.read=true;


    }
      currentPage(currentPage){
    this.pagesNumber.length-this.currentPage
     }
     readBook(pages){
         if(pages<1|| pages > this.pagesNumber.length){
             return 0;
         }
         else if(pages >= 1 && pages < this.pagesNumber.length){
           currentPage();
            return1;
         }
        if(pages ==this.pagesNumber){
            // currentPage();
              this.read=true;
              return 1;
      }

     }
    
}   
        
    
    let Book1=new Book('davinci','danbrown','scifi',2,300,false);
    let Book2=new Book('the alchemist','paulocoehlo','motivation',195,195,true);
    let Book3= new Book('5.00am club','robinsharma','motivation',400,200,true);

    
    
export const books = [Book1,Book2,Book3];




