import React from "react"
export const boundaryOptions = { color: "black", fill: false}
export const ward40MaskOptions = { color: "black", fill: true, fillcColor: "rgba(96,96,96)" }

export const rosehillRouteOptions = { color: "green" }
export const projectOverviewRouteSettins = { color: "green", weight: 4 }
export const dashedRouteOptions = { color: "green", dashArray:"20, 20" }

export const rosehillRouteStyle = (feature:any, layer:any) => {
  switch (feature.properties.phase) {
    case "1": 
      layer.options.color = "green"
      break
    case "2A":   
    layer.options.color = "rgb(139, 4, 201)"
      break
    case "2B":   
      layer.options.color = "rgb(201, 4, 192)"
      break
    case "3":   
      layer.options.color = "green"
      layer.options.dashArray = "20,20"
      break
    default: 
      layer.options.color = "black"
      break
  }
}

export const existingRoutesStyle = (feature:any, layer:any) => {
    layer.options.weight = 4;
    switch (feature.properties.stress_lvl) {
      case 1:
        layer.options.color = "green"
        break
      case 2:
        layer.options.color = "yellow"
        break
      case 3 || 4:
        layer.options.color = "orange"
        break
      default:
        layer.options.color = "black"
        break
    }
}

export const allRoutesStyle = (feature:any, layer:any) => {
  switch (feature.properties.type) {
    case "existing": 
      layer.options.color = "green"
      break
    case "planned":   
    layer.options.color = "rgb(139, 4, 201)"
      break
    case "potential":   
      layer.options.color = "rgb(201, 4, 192)"
      break
    default: 
      layer.options.color = "black"
      break
  }
}