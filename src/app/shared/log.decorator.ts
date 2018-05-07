/**
 * @param options.name {string} An identifier for the file where method exists
 * @param options.method {string} Name of the method on which decorator is applied
 * @param options.enableArgsLogging {boolean} If arguments passed to method have to be logged
 * @param options.enableReturnValueLogging {boolean} If return value of method is to be logged
 * 
 * Code modified from source: https://stackoverflow.com/questions/29775830/how-to-implement-a-typescript-decorator
 */
export function log( options ) {
    return function(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) : TypedPropertyDescriptor<any> | void {
        const originalMethod = descriptor.value; // save a reference to the original method

        // NOTE: Do not use arrow syntax here. Use a function expression in 
        // order to use the correct value of `this` in this method (see notes below)
        descriptor.value = function(...args: any[]) {
            // pre
            console.log( `${options.name} -> ${options.method} will start executing` );
            if( options.enableArgsLogging ) {
                console.log("The method args are: " + JSON.stringify(args));
            }

            // run and store result
            const result = originalMethod.apply(this, args);
            
            // post
            console.log( `${options.name} -> ${options.method} completed` );
            if( options.enableReturnValueLogging ) {
                console.log("The return value is: " + result);
            }
            
            // return the result of the original method (or modify it before returning)
            return result;
        };

        return descriptor;
    }
}