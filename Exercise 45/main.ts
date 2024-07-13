function create_car(manufacturer: string, model: string, ...options: string[]){
    let car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model,
    };

    options.forEach((option: string) => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

// Example usage
let my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof: true");
console.log(my_car);
