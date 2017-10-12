$(document).ready(function () {
    $('#another').on('click', function (e) {
        e.preventDefault();
        var quote, author;
        var url = 'https://api.forismatic.com/api/1.0/';
        $.ajax(url, {
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (res) {
                $('#quote').text(res.quoteText);

                if (res.quoteAuthor) {
                    $('#author').text('- ' + res.quoteAuthor);
                } else {
                    $('#author').text('- Unknown');
                };
                $('#tweetQuote').on('click', function () {
                    if (!res.quoteAuthor) {
                        res.quoteAuthor = " Unknown";
                    }
                    $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' +
                        res.quoteText + ' - ' + res.quoteAuthor + ' &hashtags=QuoteOfTheDay').attr('target', '_blank'); 
                    //window.open("https://twitter.com/intent/tweet?text=" + res.quoteText + " - " + res.quoteAuthor + " &hashtags=QuoteOfTheDay");

                });
            }
        })
    })
})