function Ranges(){
    rangeValue = document.getElementById("AtvSeb")
    box = document.getElementById("TextInput")
    box.value = rangeValue.value
}

function Szamol(){
    capacitySelect = document.getElementById("Capacity").value
    capacity = document.getElementById("Kapacitas").value
    speed = document.getElementById("Speed").value
    rangeValue = document.getElementById("AtvSeb").value
    solution = document.getElementById("sec")

    if(capacitySelect != "Mb"){
        if(capacitySelect == "Gb"){
            capacity = capacity * 1000
        }
        if(capacitySelect == "Tb"){
            capacity = capacity * Math.pow(1000,2)
        }
    }
    if(speed != "Mbps"){
        if(speed == "Gbps"){
            rangeValue =  rangeValue * 1000
        }
        if(speed == "Kbps"){
            rangeValue =  rangeValue / 1000
        }
        if(speed == "mbps"){
            rangeValue = rangeValue / 8
        }
    }
    solution.value = (capacity / rangeValue)
}
