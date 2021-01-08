import readline from 'readline';
import fs from 'fs';

if (process.argv.length == 4) {
  var option = process.argv[2].toLocaleString();
  var file = process.argv[3].toLocaleString();
}

if (process.argv.length == 3) {
  var file = process.argv[2].toLocaleString();
}

function mycat() {
  if (!file) {
    process.stdin;
  } else if (file && !option) {
    var stream = fs.createReadStream(file);
    readline.createInterface({
      input: stream,
    }).on('line', function (line: any) {
      process.stdout.write(line + "\n");
    });
  } else if (file && option) {
    if (option == "-e") {
      var stream = fs.createReadStream(file);
      readline.createInterface({
        input: stream,
      }).on('line', function (line: any) {
        process.stdout.write(line + "$" + "\n");
      });
    }
  }
}

mycat();
