const data = "Hello World";

// await Bun.write('static/hello.txt', data);

const file = await Bun.file("static/hello.txt");
console.log(file.size, await file.text());
console.log(await file.stream());
console.log(await file.arrayBuffer());
