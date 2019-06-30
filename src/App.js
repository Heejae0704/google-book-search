import React from 'react';
import BookSearchApp from './bookSearchApp/bookSearchApp';

function App() {

  const DATA = [
    {
      "volumeInfo": {
          "title": "Maintainable JavaScript",
          "subtitle": "Writing Readable Code",
          "authors": [
              "Nicholas C. Zakas"
          ],
          "publisher": "\"O'Reilly Media, Inc.\"",
          "publishedDate": "2012-05-10",
          "description": "You may have definite ideas about writing code when working alone, but team development requires that everyone use the same approach. With the JavaScript practices in this book—including code style, programming tips, and automation—you will learn how to write maintainable code that other team members can easily understand, adapt, and extend. Author Nicholas Zakas assembled this collection of best practices as a front-end tech leader at Yahoo!, after completing his own journey from solo hacker to team player. He also includes rules recommended by other industry authorities. Use these tips and techniques to help your team set aside individual preferences and function at a higher level. Establish specific code conventions for your team Use tools such as JSLint and JSHint to keep your team on track Adopt style guidelines, such as basic formatting, to help your team produce uniform code Apply several programming practices to solve problems and improve code quality Create an automated JavaScript build system using a variety of utilities Integrate browser-based JavaScript testing with tools such as the YUI Test Selenium Driver",
          "industryIdentifiers": [
              {
                  "type": "ISBN_13",
                  "identifier": "9781449328122"
              },
              {
                  "type": "ISBN_10",
                  "identifier": "1449328121"
              }
          ],
          "readingModes": {
              "text": true,
              "image": true
          },
          "pageCount": 242,
          "printType": "BOOK",
          "categories": [
              "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "2.6.6.0.preview.3",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=bHhlCrvbqSoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=bHhlCrvbqSoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.co.kr/books?id=bHhlCrvbqSoC&pg=PA60&dq=javascript&hl=&cd=42&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=bHhlCrvbqSoC&source=gbs_api",
          "canonicalVolumeLink": "https://market.android.com/details?id=book-bHhlCrvbqSoC"
      },
      "saleInfo": {
          "country": "KR",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
              "amount": 30243,
              "currencyCode": "KRW"
          },
          "retailPrice": {
              "amount": 27219,
              "currencyCode": "KRW"
          },
          "buyLink": "https://play.google.com/store/books/details?id=bHhlCrvbqSoC&rdid=book-bHhlCrvbqSoC&rdot=1&source=gbs_api",
          "offers": [
              {
                  "finskyOfferType": 1,
                  "listPrice": {
                      "amountInMicros": 30243000000,
                      "currencyCode": "KRW"
                  },
                  "retailPrice": {
                      "amountInMicros": 27219000000,
                      "currencyCode": "KRW"
                  }
              }
          ]
      }
  },
  {
      "volumeInfo": {
          "title": "JavaScript & jQuery: The Missing Manual",
          "authors": [
              "David Sawyer McFarland"
          ],
          "publisher": "\"O'Reilly Media, Inc.\"",
          "publishedDate": "2014-09-18",
          "description": "JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn. This easy-to-read guide not only covers JavaScript basics, but also shows you how to save time and effort with the jQuery and jQuery UI libraries of prewritten JavaScript code. You’ll build web pages that feel and act like desktop programs—with little or no programming. The important stuff you need to know: Pull back the curtain on JavaScript. Learn how to build a basic program with this language. Get up to speed on jQuery. Quickly assemble JavaScript programs that work well on multiple web browsers. Transform your user interface. Learn jQuery UI, the JavaScript library for interface features like design themes and controls. Make your pages interactive. Create JavaScript events that react to visitor actions. Use animations and effects. Build drop-down navigation menus, pop-ups, automated slideshows, and more. Collect data with web forms. Create easy-to-use forms that ensure more accurate visitor responses. Practice with living examples. Get step-by-step tutorials for web projects you can build yourself.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_13",
                  "identifier": "9781491948613"
              },
              {
                  "type": "ISBN_10",
                  "identifier": "1491948612"
              }
          ],
          "readingModes": {
              "text": true,
              "image": true
          },
          "pageCount": 686,
          "printType": "BOOK",
          "categories": [
              "Computers"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.3.5.0.preview.3",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.co.kr/books?id=ptiYBAAAQBAJ&pg=PT948&dq=javascript&hl=&cd=43&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://market.android.com/details?id=book-ptiYBAAAQBAJ"
      },
      "saleInfo": {
          "country": "KR",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
              "amount": 46451,
              "currencyCode": "KRW"
          },
          "retailPrice": {
              "amount": 41806,
              "currencyCode": "KRW"
          },
          "buyLink": "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ&rdid=book-ptiYBAAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
              {
                  "finskyOfferType": 1,
                  "listPrice": {
                      "amountInMicros": 46451000000,
                      "currencyCode": "KRW"
                  },
                  "retailPrice": {
                      "amountInMicros": 41806000000,
                      "currencyCode": "KRW"
                  }
              }
          ]
      }
  },
  ]

  return (
    <main className="App">
      <BookSearchApp bookdata={DATA}/>
    </main> 
  );
}

export default App;
