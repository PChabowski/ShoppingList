const attribute = {
    number: 0,
    inkrement: function() {
        return this.number++;
    },
    clear: function() {
        this.number = 0;
    },
    add: function(element) {
        element.setAttribute('data-id', this.inkrement());
        
    },
    addAll: function() {
        const element = document.querySelectorAll("li");
        this.clear();
        for (let i = 0; i < element.length; i++) {
            this.add(element[i]);
        }
    }

}

export { attribute };