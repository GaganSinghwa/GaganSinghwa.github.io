/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        var billyPhotos = data.images.billy;
        
        
        $('#section-bio p:last-child').remove();
        $('#section-bio h3').css('color', 'red');
        
        
        $('.quote').css('font-style', 'italic').css('color', 'blue');
        
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        
        //toprated
        let $imgContTop = ($('<div>').attr('id', 'image-container-top').attr('class', 'image-container')).append($('<img>').attr('id', 'top-image').attr('src', 'images/album/voice-in-the-night.jpg').attr('class', 'image'));
        $imgContTop.insertAfter($('#header-top-rated'))
        _.each(topRated, function(recordings, i) {
             $('<li>').append($('<div>').attr('class', 'title').text(recordings.title)).append($('<div>').attr('class', 'artist').text(recordings.artist)).append($('<div>').attr('class', 'release').text(recordings.release)).append($('<div>').attr('class', 'year').text(recordings.year)).appendTo($('#list-top-rated'))
        })
        
        //recordings
        let $recordings = $('<section>').attr('id', 'section-recordings'); 
        
        let $recordingHeader = $('<header>').text('Recordings')
        
        $recordingHeader.appendTo($recordings)
        let $imgContRecord = $('<div>').attr('id', 'image-container-recording').attr('class', 'image-container').append($('<img>').attr('id', 'recording-image').attr('src', 'images/album/eastern-rebellion.jpg').attr('class', 'image'))
        $recordings.append($imgContRecord).append(($('<ul>').attr('id', 'list-recordings'))).appendTo($('#sidebar')); 
        
         
        _.each(data.discography.recordings, function(recordings) {
            $('<li>').attr('class', 'recording').append($('<div>').attr('class', 'title').text(recordings.title)).append($('<div>').attr('class', 'artist').text(recordings.artist)).append($('<div>').attr('class', 'release').text(recordings.release)).append($('<div>').attr('class', 'year').text(recordings.year)).appendTo($('#list-recordings'))
        })
        
        
        
        // Billy image clickable
        var billyPics = data.images.billy;
        
        $('#image-billy').on('click', function(event) {
            const pacifier = opspark.makePacifier($('#image-container-billy')[0]);
            let $img = $('#image-billy')
            for (var i = 0; i < billyPics.length; i++) {
                if ($img.attr('src') === billyPics[billyPics.length - 1]) {
                    $img.attr('src', billyPics[0]);
                    pacifier.stop();
                    return
                }
                if ($img.attr('src') === billyPics[i]) {
                    $img.attr('src', billyPics[i + 1]);
                    pacifier.stop();
                    return
                }
            }
        })
            // if ($('#image-billy').attr('src') === 'images/billy/billy-0.jpg') {
            // $('#image-billy').attr('src', billyPics[1])
            // return
            // }
            // if ($('#image-billy').attr('src') === 'images/billy/billy-1.jpg') {
            // $('#image-billy').attr('src', 'images/billy/billy-2.jpg')
            // return
            // }
            // if ($('#image-billy').attr('src') === 'images/billy/billy-2.jpg') {
            // $('#image-billy').attr('src', 'images/billy/billy-3.jpg')
            // return
            // }
            // if ($('#image-billy').attr('src') === 'images/billy/billy-3.jpg') {
            // $('#image-billy').attr('src', 'images/billy/billy-0.jpg')
            // return
            // }
        
        
        // $('#image-billy').on('click', function(event) {
        //     let currentImage = $('#image-billy').attr('src');
        //     let i = 0
        //     for (i = 0; i < billyPics.length; i++) {
        //         if (currentImage === billyPics[i]) {
        //             i++
        //             return
        //         }
        //     }
        //     let nextImage = billyPics[i]
        //     console.log(nextImage)
        
        //     $('#image-billy').attr('src', nextImage)
            
        //     $('#image-billy').fadeOut('fast', function(ev) {
        //         $('#image-billy').attr('src', nextImage).attr('i', i)
        //     }).fadeIn('fast')
        // })
        
        
        // toprated/recordings image swapper
        
        
        
        $('#list-top-rated').on('click', 'li', function(event) {
            
            // $('#top-image').attr('src', data.discography.topRated[$(this).attr('id')].art)
            const pacifier = opspark.makePacifier($('#top-image')[0]);
            let thisTitle = $(event.currentTarget).children('div.title').text();
            for (var i = 0; i < data.discography.topRated.length; i++) {
                if (data.discography.topRated[i].title === thisTitle) {
                    $('#top-image').attr('src', data.discography.topRated[i].art);
                }
            }pacifier.stop(); 
        })
        
        $('#list-recordings').on('click', 'li', function(event) {
            
            // $('#top-image').attr('src', data.discography.topRated[$(this).attr('id')].art)
            const pacifier = opspark.makePacifier($('#recording-image')[0]);
            let thisTitle = $(event.currentTarget).children('div.title').text();
            for (var i = 0; i < data.discography.recordings.length; i++) {
                if (data.discography.recordings[i].title === thisTitle) {
                    $('#recording-image').attr('src', data.discography.recordings[i].art);
                }
            }pacifier.stop(); 
        })        
        
        
        //9 make new tables
        
        var createRiderTable = function(riders) {
            var createRow = function(rider) {
                var $row = $('<tr>');
                var $type = $("<td>").text(rider.type);
                var $desc = $("<td>").text(rider.desc);
                $row.append($type);
                $row.append($desc);
                return $row;
            }
            var $table= $("<table>");
            var $rows = riders.map(createRow);
            $table.append($rows);
            $('<header>').text('Riders').prependTo($table)
            return $table;
        }
        
        createRiderTable(data.rider).appendTo($('#sections'));
        
        
        $('.bio').css("border-style", 'solid').css("border-width", '5px')
        $('h3').css('text-decoration', 'underline')
        $('#sidebar').css('max-width', '225px')
        $('#image-billy').css('margin-bottom', '20px')
        
        
        // YOUR CODE ABOVE HERE // 
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
