$("#slider").slider({
            max:26,
            min:0.0,
            step:2,
            value:0,
            slide: function(event, ui) {  
                $("#amount").val(ui.value);
            }
        });

        $('#slider').slider('pips', {
            first: false,
            last: false,
            step: "1"
        });

        $('#slider').slider({
            change: function(event, ui) { 
                if(ui.value == 0)
                    {
                        hide_image('ALL');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent"></div>');
                        $('#compare span').text('Um wie viel größer/kleiner ist die Erde?');
                    }

                if(ui.value == 2)
                    {
                        hide_image('MERKUR');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent">1/2</div>');

                       $('#compare span').text('Merkur ist um die Hälfte kleiner als die Erde. Der Mars nur um ein Drittel.');

                    }

                if(ui.value == 4)
                    {
                        hide_image('ERDE');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent">1</div>');
                        $('#compare span').text('Die Venus ist beinahe so groß wie die Erde. Sie ist nur ein klitzeleines-bisschen kleiner - in Planetengröße.');
                    }
                if(ui.value == 6 || ui.value == 8 || ui.value == 10)
                    {   
                        hide_image('ALL');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent"></div>');
                        $('#compare span').text('Um wie viel größer/kleiner ist die Erde?');

                    }

                if(ui.value == 12)
                    {
                        hide_image('NEPTUN');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent">3</div>');
                        $('#compare span').text('Uranus und Neptun sind ungefähr 3 Mal so groß wie die Erde.');
                    }
                if(ui.value == 14 || ui.value == 16 || ui.value == 18 || ui.value == 20)
                    {
                        hide_image('ALL');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent"></div>');
                        $('#compare span').text('Um wie viel größer/kleiner ist die Erde?');
                    }
                if(ui.value == 22)
                    {
                        hide_image('SATURN');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent">9</div>');
                        $('#compare span').text('In den großen Saturn geht die Erde um die 9 Mal hinein.');
                    }

                if(ui.value == 24)
                    {
                        hide_image('JUPITER');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent">11</div>');
                        $('#compare span').text('Jupiter ist der größte Planet in unserem Sonnensystem. Er ist 11 Mal so groß wie die Erde!');
                    }
                if(ui.value == 26)
                    {
                        hide_image('ALL');
                        $(this).find('.ui-slider-handle').html('<div class="sliderControl-label v-labelCurrent"></div>');
                        $('#compare span').text('Um wie viel größer/kleiner ist die Erde?');
                    }

            } 
        });


        function hide_image(id)
        {
            if(id =='MERKUR'){
                $("#SONNE").hide();
                $("#MERKUR").show();
                $("#VENUS").hide();
                $("#ERDE").show();
                $("#MARS").show();
                $("#JUPITER").hide();
                $("#SATURN").hide();
                $("#NEPTUN").hide();
                $("#URANUS").hide();
            }
            if(id =='ERDE'){
                $("#SONNE").hide();
                $("#MERKUR").hide();
                $("#VENUS").show();
                $("#ERDE").show();
                $("#MARS").hide();
                $("#JUPITER").hide();
                $("#SATURN").hide();
                $("#NEPTUN").hide();
                $("#URANUS").hide();
            }
            if(id =='NEPTUN'){
                $("#SONNE").hide();
                $("#MERKUR").hide();
                $("#VENUS").hide();
                $("#ERDE").show();
                $("#MARS").hide();
                $("#JUPITER").hide();
                $("#SATURN").hide();
                $("#NEPTUN").show();
                $("#URANUS").show();
            }
            if(id =='SATURN'){
                $("#SONNE").hide();
                $("#MERKUR").hide();
                $("#VENUS").hide();
                $("#ERDE").show();
                $("#MARS").hide();
                $("#JUPITER").hide();
                $("#SATURN").show();
                $("#NEPTUN").hide();
                $("#URANUS").hide();
            }
            if(id =='JUPITER'){
                $("#SONNE").hide();
                $("#MERKUR").hide();
                $("#VENUS").hide();
                $("#ERDE").show();
                $("#MARS").hide();
                $("#JUPITER").show();
                $("#SATURN").hide();
                $("#NEPTUN").hide();
                $("#URANUS").hide();
            }
            if(id =='ALL'){
                $("#SONNE").hide();
                $("#MERKUR").hide();
                $("#VENUS").hide();
                $("#ERDE").hide();
                $("#MARS").hide();
                $("#JUPITER").hide();
                $("#SATURN").hide();
                $("#NEPTUN").hide();
                $("#URANUS").hide();
            }
        }