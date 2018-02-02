function GetURLParameter(sParam)
            {
                var sPageURL = window.location.search.substring(1);
                var sURLVariables = sPageURL.split('&');
                for (var i = 0; i < sURLVariables.length; i++)
                {
                    var sParameterName = sURLVariables[i].split('=');
                    if (sParameterName[0] == sParam)
                    {
                        return sParameterName[1];
                    }
                }
            }

            
            var data;
            
            /*--------------------------------*/
                /*Generate Content*/
            
            $.getJSON("planets.json", function JSONdata(json) {
                data = json; 
                //console.log(data[0].name);                
                var index = GetURLParameter('planet');
                document.getElementById('planetname').innerHTML=data[index].name; 
                document.getElementById('planetname').innerHTML=data[index].name;
                
                //change title on browsertab
                document.getElementById('title').innerHTML = data[index].name; 
                
                var facts = data[index].facts; 
                var images = data[index].images;
                var path = data[index].pic;
                
                    
                    
                /*--------------------------------*/
                /*Planet Picture*/
                
                var pic = '<li><img id="p_img" src= "' + path + '"></li>';
                $('#p_image').append(pic);

                
                
                /*--------------------------------*/
                /*Generate Facts*/
                var x = document.createElement("UL");
                x.setAttribute("id", "myUL");
                $('#cont_desc').prepend(x);
                document.getElementById("myUL");    
                
                for(var i = 0; i < facts.length; i++){
                    var y = document.createElement("LI");
                    var t = document.createTextNode(facts[i]);
                    y.appendChild(t);
                    document.getElementById("myUL").appendChild(y);
                }
                
                
                /*--------------------------------*/
                /*Generate Images*/
                for(var i = 0; i < images.length; i++){
                    var path = images[i];
                    var img = '<img src= "' + path + '">';
                    $('#imgs').prepend(img);
                }
 
            });