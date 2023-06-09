(() => {
    const mapKey = import.meta.env.HT_MAP_KEY
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://map.qq.com/api/gljs?v=1.exp&key=${mapKey}&callback=initMap`;
    document.body.appendChild(script);
})()