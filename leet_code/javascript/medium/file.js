function keysToObjects(input) {
  const fileSystem = {};
  for (let i = 0; i < input.length; i++) {
    let names = input[i].split("/");
    // names = names.filter((n) => n);
    let file
    if (names[names.length - 1].includes(".")) {
      file = names.pop();
    } else {
      names.pop(); 
    };
    
    let current = fileSystem;
    for (let j = 1; j < names.length; j++) {
      let currentName = names[j];
      if (current[currentName]) {
        current = current[currentName];
      } else {
        current[currentName] = {};
        current = current[currentName];
      }
    }
    
    if (file) {
      current[file] = null;
    }
    
  }
  return fileSystem;
}