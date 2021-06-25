import React, { useEffect, useRef } from 'react'

const CompanyCard = (props) => {
    const {companyName, width, height} = props
    const divRef = useRef()

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
        script.async = true;
        script.innerHTML =  JSON.stringify({
            "symbol": `${companyName}`,
            "width": `${width}`,
            "locale": "en",
            "colorTheme": "light",
            "isTransparent": false,
            "height": `${height}`
          })
        divRef.current.appendChild(script);
    }, [])

    return (
        <div className="tradingview-widget-container" ref={divRef}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    )
}

export default CompanyCard