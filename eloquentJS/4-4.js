function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
        //for object comparision, it is better to use obj[key]. here the value of key is dynamically replaced.
        //obj.key looks for the string 'key' in obj. does not dynamically replace. same as obj['key'].
        //dot notation is typically used for ease of use. [] brackets is better..?
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }