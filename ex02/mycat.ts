const readline = require('readline');
const fs = require('fs');


if (process.argv.length == 4) {
  console.log(process.argv)
  console.log(process.argv.length)

  var option = process.argv[2].toLocaleString();
  var file = process.argv[3].toLocaleString();
}

if (process.argv.length == 3) {
  var file = process.argv[2].toLocaleString();
}

function mycat() {
  console.log("Fichier :", file);
  console.log("Option :", option);

  if (!file) {
    console.log("!file situation")
    process.stdin;
  } else if (file && !option) {
    console.log("file situation")
    var stream = fs.createReadStream(file);
    readline.createInterface({
      input: stream,
    }).on('line', function (line: any) {
      process.stdout.write(line + "\n");
    });
  } else if (file && option) {
    console.log("file + option situation");
    if (option == "-e") {
      var stream = fs.createReadStream(file);
      readline.createInterface({
        input: stream,
      }).on('line', function (line: any) {
        process.stdout.write(line + "$" + "\n");
      });
    }
  }

  // const stm = file ? fs.createReadStream(file) : process.stdin;
}

mycat();