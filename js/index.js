// Ygoprodeck API link
const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?misc=yes';

//
const toggleDarkMode = () => {
    var body = document.body;
    var searchBar = document.getElementById("search-bar");
    var filterBar = document.getElementById("filter-bar");
    var darkMode = document.getElementById("dark-mode");
    var name = document.getElementById("name");
    var card = document.getElementById("card-type");
    var type = document.getElementById("type");
    var attribute = document.getElementById("attribute");
    var format = document.getElementById("format");
    var filter = document.getElementById("filter");
    var submit = document.getElementById("submit");
    var apply = document.getElementById("apply");
    var reset = document.getElementById("reset");
    var order = document.getElementById("order");
    var sort = document.getElementById("sort");
    
    body.classList.toggle("color-dark");
    searchBar.classList.toggle("color-medium");
    filterBar.classList.toggle("color-medium");
    darkMode.classList.toggle("color-light");
    name.classList.toggle("color-light");
    card.classList.toggle("color-light");
    type.classList.toggle("color-light");
    attribute.classList.toggle("color-light");
    format.classList.toggle("color-light");
    filter.classList.toggle("color-light");
    submit.classList.toggle("color-light");
    reset.classList.toggle("color-light");
    order.classList.toggle("color-light");
    apply.classList.toggle("color-light");
    sort.classList.toggle("color-light");
};

const toggleFilters = () => {
    var filterBar = document.getElementById("filter-bar");
    var gallery = document.getElementById("gallery");
    
    if (filterBar.style.marginTop === "59px" || filterBar.style.marginTop === "") {
        // Disable display modal
        filterBar.style.marginTop = "0px";
        gallery.style.marginTop = "-59px"

    }
    else if (filterBar.style.marginTop = "0px") {
        // Initialize style display if empty
        filterBar.style.marginTop = "59px";
        gallery.style.marginTop = "0px"
    }   
};

// Display modal and populate with selected card information
const toggleFocus = (id) => {
    var img = document.getElementById(id);
    var modal = document.getElementById("focus-modal");
    var modalContent = document.getElementById("modal-content");

    // Display if modal is hidden
    if (modal.style.display === "none" || modal.style.display === "") {
        // Disable display modal
        modal.style.display = "flex";

        // Inject card image via clicked element id
        modalContent.src = img.src;
        modalContent.style.width = "500px";
    }
    else {
        // Initialize style display if empty
        modal.style.display = "none";
    }

    // Hide modal when clicked
    modal.onclick = function () {
        modal.style.display = "none";
    };
};

// Update dropdown contents based on other dropdown selections
const updateDropdowns = () => {
    var filter = document.getElementById("filter");
    var apply = document.getElementById("apply");
    var card = document.getElementById("card-type");
    var type = document.getElementById("type");
    var attribute = document.getElementById("attribute");
    var sort = document.getElementById("sort");

    // Update dropdowns based on card type
    switch (card.value) {
        case "normal monster":
        case "normal tuner monster":
        case "effect monster":
        case "flip effect monster":
        case "flip tuner effect monster":
        case "pendulum normal monster":
        case "pendulum effect monster":
        case "pendulum flip effect monster":
        case "pendulum tuner effect monster":
        case "ritual monster":
        case "ritual effect monster":
        case "fusion monster":
        case "pendulum effect fusion monster":
        case "synchro monster":
        case "synchro pendulum effect monster":
        case "synchro tuner monster":
        case "xyz monster":
        case "xyz pendulum effect monster":
        case "link monster":
        case "gemini monster":
        case "spirit monster":
        case "toon monster":
        case "tuner monster":
        case "union effect monster":
            // Enable type dropdown
            type.disabled = false;
            type.style.display = "block";

            // Enable attribute dropdown
            attribute.disabled = false;
            attribute.style.display = "block";
            attribute = "";

            // Enable all type filters
            for (let i = 0; i < type.options.length; i++) {
                type.options[i].style.display = "block";
            }

            // Disable last 7 type filters
            for (let i = type.options.length - 7; i < type.options.length; i++) {
                type.options[i].style.display = "none";
            }

            // Enable all sorting filters
            for (let i = 0; i < sort.options.length; i++) {
                sort.options[i].style.display = "block";
            }

            // Disable monster sorting filters
            for (let i = 4; i < sort.options.length; i++) {
                sort.options[i].style.display = "none";
            }

            // Enable link sorting filters
            if(card.value === 'link monster') {
                sort.options[3].style.display = "none";
                sort.options[4].style.display = "block";
                sort.options[5].style.display = "block";
            }

            // Enable non-link sorting filters
            else if(card.value !== 'link monster' && card.value !== "") {
                sort.options[3].style.display = "block";
                sort.options[5].style.display = "block";
                sort.options[6].style.display = "block";
            }

            break;
    case 'spell card':
        // Enable type dropdown
        type.disabled = false;
        type.options[0].selected = "selected";

        // Disable attribute dropdown
        attribute.disabled = true;
        attribute.options[0].selected = "selected";
        attribute.style.display = "none";

        // Enable all type filters
        for (let i = 0; i < type.options.length; i++) {
            type.options[i].style.display = "block";
        }

        // Disable first 25 options
        for (let i = 1; i < type.options.length - 7; i++) {
            type.options[i].style.display = "none";
        }

        // Disable counter option
        type.options[32].style.display = "none";
        
        // Disable monster sorting filters
        for (let i = 4; i < sort.options.length; i++) {
            sort.options[i].style.display = "none";
        }

        break;
    case 'trap card':
        // Enable type dropdown
        type.disabled = false;
        type.options[0].selected = "selected";
        
        // Disable attribute dropdown
        attribute.disabled = true;
        attribute.options[0].selected = "selected";
        attribute.style.display = "none";

        // Enable all type filters
        for (let i = 0; i < type.options.length; i++) {
            type.options[i].style.display = "block";
        }

        // Disable first 25 options
        for (let i = 1; i < type.options.length - 7; i++) {
            type.options[i].style.display = "none";
        }

        // Disable spell options
        type.options[27].style.display = "none";
        type.options[28].style.display = "none";
        type.options[30].style.display = "none";
        type.options[31].style.display = "none";

        // Disable monster sorting filters
        for (let i = 4; i < sort.options.length; i++) {
            sort.options[i].style.display = "none";
        }

        break;
    default:
        // Disable type dropdown
        type.style.display = "none";
        type.disabled = true;

        // Disable attribute dropdown
        attribute.style.display = "none";
        attribute.disabled = true;

        // Disable monster sorting filters
        for (let i = 3; i < sort.options.length; i++) {
            sort.options[i].style.display = "none";
        }

        break;
    }
    
    
};

// Reset all inputs and dropdowns
const resetInputs = () => {
    var fname = document.getElementById("name");
    var card = document.getElementById("card-type");
    var type = document.getElementById("type");
    var attribute = document.getElementById("attribute");
    var format = document.getElementById("format");
    var sort = document.getElementById("sort");
    var order = document.getElementById("order");

    fname.value = "";
    card.value = "";
    type.value = "";
    attribute.value = "";
    format.value = "";
    sort.value = "az";
    order.value = "asc";

    updateDropdowns();
};

// Create a search using text input and dropdown filter values
const search = () => {
    var filters = [];
    var fname = document.getElementById("name");
    var cardType = document.getElementById("card-type");
    var type = document.getElementById("type");
    var attribute = document.getElementById("attribute");
    var format = document.getElementById("format");

    // Add cards that partially matches the inputted text
    if (fname.value !== '') {
        filters.push(['name', fname.value]);
    }

    // Filter by type
    if (type.value !== '') {
        filters.push(['type', type.value]);
    }

    // Filter by attribute
    if (attribute.value !== '') {
        filters.push(['attribute', attribute.value]);
    }

    // Filter by format
    if (format.value !== '') {
        filters.push(['format', format.value]);
    }

    // Add types that matches the selected card type
    if (cardType.value !== '') {
        filters.push(['card-type', cardType.value.replace(/ /g, '%20')]);
    }

    // Create filtered url to send to API
    filteredURL = createFilteredUrl(filters);

    // Populate database with filtered results from API
    database.search(filteredURL);

    // Set scroll to top screen
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// Populate database with filtered results from API
const searchStaples = () => {
    database.search(url + "&staple=yes");
};

// Sort populated database by user selected method
const sortResults = () => {
    var sort = document.getElementById("sort").value;
    var order = document.getElementById("order").value;

    database.sort(sort, order);
    database.display('gallery');
};

// Request response from JSON file and return parsed JSON data
const parseFile = (file) => {
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null);
    var data = JSON.parse(request.responseText);
    return data;
};

// Create a URL to use for filtering in the API
const createFilteredUrl = (filters) => {
    var filteredURL = url;

    // Add API compliant strings to user defined filters
    for (let i = 0; i < filters.length; i++) {
        switch(filters[i][0]) {
        case 'name': 
            filteredURL += `&fname=${filters[i][1]}`;
            break;
        case 'type':
            filteredURL += `&race=${filters[i][1]}`;
            break;
        case 'attribute':
            filteredURL += `&attribute=${filters[i][1]}`;
            break;
        case 'format':
            filteredURL += `&format=${filters[i][1]}`;
            break;
        case 'card-type':
            // Add "&type=" only once and build type list using commas
            if (!filteredURL.includes('&type=')) {
                filteredURL += `&type=${filters[i][1]}`;
            }
            else {
                filteredURL += `,${filters[i][1]}`;
            }
            break;
        }
    }

    return filteredURL;
};

// Check if an edison card is banned and return its deck limit
const getEdisonBanStatus = (card) => {
    for(let i = 0; i < edisonData.data.length; i++) {
        if(card.getName().toLowerCase() === edisonData.data[i].name.toLowerCase()) {
            return edisonData.data[i].ban_edison;
        }
    }
};

// Database class that will pull and save card data from API
class Database {
    constructor() {
        this.results = [];
    }
    
    checkSize = () => {
        if (this.results.length < 10) {
            
        }
    }

    // Initialize list with new results on search
    search = (filteredURL) => {
        this.clear();

        console.log(filteredURL);

        // Fetch card data from API
        fetch(filteredURL)
            .then((res) => res.json()) 
            .then((data) => {
                try {
                    for (let i = 0; i < data.data.length; i++) {
                        var card = new Card(data.data[i]);
                        this.add(card);
                    }

                    if(this.results.length !== 0) {
                        sortResults();
                    }
                    else {
                        //window.confirm('No results found');
                    }
                }
                catch (error) {
                    //window.confirm('No results found');
                }
                
                this.display('gallery');
            }
        );
    }

    // Add cards to list based on user defined filters
    add = (card) => {  
        var format = document.getElementById("format");

        // Add all cards regardless of format or deck limit
        if (format.value === "") {
            this.results.push(card);
        }

        // Add cards by TCG format
        else if (format.value === 'tcg') {
            console.log("tcg");
            // Add all TCG format cards regardless of deck limit
            if (card.getBanlistInfo() != null) {
                if (card.getBanlistInfo().ban_tcg != null) {
                    // Set banlist icon address based on card limit
                    card.setCardHTML(`img/${card.getBanlistInfo().ban_tcg.toLowerCase()}.png`);
                }
            }
            
            this.results.push(card);
        }

        // Add cards by OCG format
        else if (format.value === 'ocg') {
            // Add all OCG format cards regardless of deck limit
            if (card.getBanlistInfo() != null) {
                if (card.getBanlistInfo().ban_ocg != null) {
                    // Set banlist icon address based on card limit
                    card.setCardHTML(`img/${card.getBanlistInfo().ban_ocg.toLowerCase()}.png`);
                }
            }
            
            this.results.push(card);
        }

        // Add cards by goat format
        else if (format.value === 'goat') {
            // Add all goat format cards regardless of deck limit
            if (card.getBanlistInfo() != null) {
                if (card.getBanlistInfo().ban_goat != null) {
                    // Set banlist icon address based on card limit
                    card.setCardHTML(`img/${card.getBanlistInfo().ban_goat.toLowerCase()}.png`);
                }
            }
            
            this.results.push(card);
        }

        // Add cards by edison format
        else if (format.value === 'edison') {
            // Add all edison format cards regardless of deck limit
            if (getEdisonBanStatus(card) != null) {
                    // Set banlist icon address based on card limit
                card.setCardHTML(`img/${getEdisonBanStatus(card).toLowerCase()}.png`);
            }
            this.results.push(card);
        }
    }

    // Search through list for card matching the passed ID and return it
    get = (id) => {
        for (let i = 0; i < this.results.length; i++) {
            if (id === this.results[i].getID()) {
                return this.results[i];
            }
        }
    }

    // Sort list alphabetically based on given sort type
    sort = (type, direction) => {
        switch(type) {
        case 'az':
            if(direction === 'asc') {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getName() > this.results[b].getName()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }
            else if(direction === "desc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getName() < this.results[b].getName()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }
            
            break;
        case 'views':
            if(direction === "asc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getViews() > this.results[b].getViews()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            else if(direction === "desc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getViews() < this.results[b].getViews()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            break;
        case 'tcg':
            if(direction === "asc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getTCGDate() > this.results[b].getTCGDate()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            else if(direction === "desc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getTCGDate() < this.results[b].getTCGDate()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            
            break;
        case 'ocg':
            if(direction === "asc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getOCGDate() > this.results[b].getOCGDate()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            else if(direction === "desc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getOCGDate() < this.results[b].getOCGDate()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }
             
            break;
        case 'level':
            if(direction === "asc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getLevel() > this.results[b].getLevel()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            else if(direction === "desc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getLevel() < this.results[b].getLevel()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }
            
            break;
        case 'link':
            if(direction === "asc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getLinkVal() > this.results[b].getLinkVal()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            else if(direction === "desc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getLinkVal() < this.results[b].getLinkVal()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }
            
            break;    
        case 'atk':
            if(direction === "asc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getAttack() > this.results[b].getAttack()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            else if(direction === "desc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getAttack() < this.results[b].getAttack()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }
                
            break;
        case 'def':
            if(direction === "asc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getDefense() > this.results[b].getDefense()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }

            else if(direction === "desc") {
                for (let a = 0; a < this.results.length; a++) {
                    for (let b = a + 1; b < this.results.length; b++) {
                        if (this.results[a].getDefense() < this.results[b].getDefense()) {
                            var temp = this.results[a];
                            this.results[a] = this.results[b];
                            this.results[b] = temp;
                        }
                    }
                }
            }
            
            break;
        }
    }

    // Contruct HTML string to inject into an HTML element
    display = (elementID) => {
        const info = document.getElementById(elementID);
        var HTMLString = `<div class="${elementID}">`;

        // Add all HMTL strings stored in each card
        for (let i = 0; i < this.results.length; i++) {
            HTMLString += this.results[i].getCardHTML();
        }

        HTMLString += '</div>';
        info.innerHTML = HTMLString;
    }
    
    // Save a copy of the Ygoprodeck API card info JSON
    save = (filename) => {
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?misc=yes')
            .then((res) => res.blob())
            .then((data) => {
                var a = document.createElement('a');
                a.href = window.URL.createObjectURL(data);
                a.download = filename;
                a.click();
            }
        );
    }

    // Pop all items in list until empty
    clear = () => {
        while (this.results.length > 0) {
            this.results.pop();
        }
    }
}

// Card class to save card information from the Ygoprodeck API
class Card {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.frameType = data.frameType;
        this.desc = data.desc;
        this.pend_desc = data.pend_desc;
        this.monster_desc = data.monster_desc;
        this.atk = data.atk;
        this.def = data.def;
        this.level = data.level;
        this.race = data.race;
        this.attribute = data.attribute;
        this.archetype = data.archetype;
        this.linkval = data.linkval;
        this.linkmarkers = data.linkmarkers;
        this.scale = data.scale;
        this.ygoprodeck_url = data.ygoprodeck_url;
        this.card_sets = data.card_sets;
        this.banlist_info = data.banlist_info;
        this.card_images = data.card_images;
        this.card_price_tcgplayer = data.card_prices[0].tcgplayer_price;
        this.card_price_cardmarket = data.card_prices[0].cardmarket_price ;
        this.card_price_coolstuffinc = data.card_prices[0].coolstuffinc_price ;
        this.card_price_ebay = data.card_prices[0].ebay_price;
        this.card_price_amazon = data.card_prices[0].amazon_price ;
        this.beta_name = data.misc_info[0].beta_name;
        this.staple = data.misc_info[0].staple;
        this.views = data.misc_info[0].views;
        this.viewsweek = data.misc_info[0].viewsweek;
        this.upvotes = data.misc_info[0].upvotes;
        this.downvotes = data.misc_info[0].downvotes;
        this.formats = data.misc_info[0].formats;
        this.treated_as = data.misc_info[0].treated_as;
        this.beta_id = data.misc_info[0].beta_id;
        this.tcg_date = data.misc_info[0].tcg_date;
        this.ocg_date = data.misc_info[0].ocg_date;
        this.konami_id = data.misc_info[0].konami_id;
        this.has_effect = data.misc_info[0].has_effect;
        this.question_atk = data.misc_info[0].question_atk;
        this.question_def = data.misc_info[0].question_def;
        this.local_images = [{ "local": `../img/${this.id}.jpg`, "local_small": `../img/small/${this.id}.jpg` }];
        this.github_images = [{ "github": `https://raw.githubusercontent.com/sleeparalysis/Yugioh-Cards/main/${this.id}.jpg` }];
        this.cardHTML = `
            <div class="g1">
                <img id="ban-icon" class="ban-icon" src="img/blank.png" loading='lazy'/>
                <img id="${this.getID()}" class="card" src="${this.getCardImages()[0].image_url}" loading='lazy' onclick="toggleFocus(${this.getID()});"/>
            </div>`;
    }

    getID = () => { return this.id; }
    getName = () => { return this.name; }
    getType = () => { return this.type; }
    getFrameType = () => { return this.frameType; }
    getDesc = () => { return this.desc; }
    getPendDesc = () => { return this.pend_desc; }
    getMonsterDesc = () => { return this.monster_desc; }
    getAttack = () => { return this.atk; }
    getDefense = () => { return this.def; }
    getLevel = () => { return this.level; }
    getRace = () => { return this.race; }
    getAttribute = () => { return this.attribute; }
    getArchetype = () => { return this.archetype; }
    getLinkVal = () => { return this.linkval; }
    getLinkMarkers = () => { return this.linkmarkers; }
    getScale = () => { return this.scale; }
    getCardURL = () => { return this.ygoprodeck_url; }
    getCardSets = () => { return this.card_sets; }
    getBanlistInfo = () => { return this.banlist_info; }
    getCardImages = () => { return this.card_images; }
    getLocalImages = () => { return this.local_images; }
    getGithubImages = () => { return this.github_images; }
    getCardPriceTcgPlayer = () => { return this.card_price_tcgplayer; }
    getCardPriceCardMarket = () => { return this.card_price_cardmarket; }
    getCardPriceCoolStuffInc = () => { return this.card_price_coolstuffinc; }
    getCardPriceEbay= () => { return this.card_price_ebay; }
    getCardPriceAmazon = () => { return this.card_price_amazon; }
    getCardPrices = () => { return this.card_prices; }
    getBetaName = () => { return this.beta_name; }
    getStaple = () => { return this.staple; }
    getViews = () => { return this.views; }
    getViewsWeek = () => { return this.viewsweek; }
    getUpvotes = () => { return this.upvotes; }
    getDownvotes = () => { return this.downvotes; }
    getFormats = () => { return this.formats; }
    getTreatedAs = () => { return this.treated_as; }
    getBetaID = () => { return this.beta_id; }
    getTCGDate = () => { return this.tcg_date; }
    getOCGDate = () => { return this.ocg_date; }
    getKonamiID = () => { return this.konami_id; }
    getHasEffect = () => { return this.has_effect; }
    getQuestionAtk = () => { return this.question_atk; }
    getQuestionDef = () => { return this.question_def; }
    getCardHTML = () => { return this.cardHTML; }

    // Fix spacing issue when displaying pendulum card descriptions
    getFormattedDesc = () => {
        var formattedDesc = this.desc.replaceAll(".\n[", ".\n\n[");
        return formattedDesc;
    }

    // HTML code block to use for injection
    setCardHTML =(url) => { 
        this.cardHTML = `
        <div class="card-container">
            <img id="ban-icon" class="ban-icon" src="${url}" alt="" loading='lazy'/>
            <img id="${this.getID()}" class="card" src="${this.getCardImages()[0].image_url}" alt="" loading='lazy' onclick="view(${this.getID()});"/>
        </div>`;
    }
}

// Initialize
const filterData = parseFile('data/sort.json');
const edisonData = parseFile('data/edison.json');
var database = new Database();
updateDropdowns();
resetInputs();
searchStaples();

