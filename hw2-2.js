console.log('Part 2')

let vehicle = {};
vehicle.brandName = 'Tesla';
vehicle.model = 'model 3';
console.log(vehicle);
vehicle.model = 'model S'
console.log(vehicle);
delete vehicle['model'];
console.log(vehicle);