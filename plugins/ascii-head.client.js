export default defineNuxtPlugin(() => {
    const asciiArt = `
   made with ♥ by:
     gg                                                                    ,ggggggg,                                                     
    dP8,                                                                 ,dP""""""Y8b                          ,dPYb,                    
   dP Yb                                                                 d8'    a  Y8                          IP''Yb                    
  ,8  '8,                                                                88     "Y8P' gg                       I8  8I                    
  I8   Yb                                                                '8baaaa      ""                       I8  8'                    
  '8b, '8,    ,ggg,    ,gggggg,   ,ggg,    ,ggg,,ggg,,ggg,   gg     gg  ,d8P""""      gg     ,g,       ,g,     I8 dP   ,ggg,    ,gggggg, 
   '"Y88888  i8" "8i   dP""""8I  i8" "8i  ,8" "8P" "8P" "8,  I8     8I  d8"           88    ,8'8,     ,8'8,    I8dP   i8" "8i   dP""""8I 
       "Y8   I8, ,8I  ,8'    8I  I8, ,8I  I8   8I   8I   8I  I8,   ,8I  Y8,           88   ,8'  Yb   ,8'  Yb   I8P    I8, ,8I  ,8'    8I 
        ,88, 'YbadP' ,dP     Y8, 'YbadP' ,dP   8I   8I   Yb,,d8b, ,d8I  'Yba,,_____,_,88,_,8'_   8) ,8'_   8) ,d8b,_  'YbadP' ,dP     Y8,
    ,ad88888888P"Y8888P      'Y8888P"Y8888P'   8I   8I   'Y8P""Y88P"888   '"Y88888888P""Y8P' "YY8P8PP' "YY8P8P8P'"Y88888P"Y8888P      'Y8
  ,dP"'   Yb                                                      ,d8I'                                                                  
 ,8'      I8                                                    ,dP'8I                                                                   
,8'       I8                                                   ,8"  8I                                                                   
I8,      ,8'                                                   I8   8I                                                                   
'Y8,___,d8'                                                    '8, ,8I                                                                   
  "Y888P"                                                       'Y8P"                                                                    
  ~ the music in our hearts lives on forever
    `.trim();
  
    if (import.meta.client) {
      const comment = document.createComment(asciiArt);
      document.head.insertBefore(comment, document.head.firstChild);
    }
  });