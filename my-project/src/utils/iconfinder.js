async function findicon(iconName) {
    try {
        
        let response = await fetch(`https://api.logo.dev/search?q=${iconName}`, {
          headers: {
            "Authorization": `Bearer: sk_K7VLUNBzSWGeRBa-FC0NFQ`
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        let data = await response.json();
        
        
        return data ? data[0] : null
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
}

async function iconsearch(searchicon) {
    try {
        let response = await fetch(`https://api.logo.dev/search?q=${searchicon}`, {
          headers: {
            "Authorization": `Bearer: sk_K7VLUNBzSWGeRBa-FC0NFQ`
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        let data = await response.json(); 
        return data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
}

export {
    findicon,
    iconsearch
}