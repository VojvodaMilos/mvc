class APIservice {
    static getData() {
        return fetch("/data").then(res => res.json());
    }

    static sendData(allData) {
        return fetch(`/data/${allData}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }).then(res => res.json());
    }
}