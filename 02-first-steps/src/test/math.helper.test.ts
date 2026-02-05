import {describe, expect, test} from "vitest"
import { add, multiply, subtract } from "../helpers/math.helper"


describe('add' , ()=>{


test('should add two positives numbers' , () =>{

const result = add(1,3);
if (result !== 2 ){
//throw new Error ('result is not 2')
expect(result).toBe(4)

}



})
})


describe('subtract', ()=>{
 test('should subtract two positive numbers', () => { 
 
 const a = 2
 const b= 2 
 
 const result = subtract(a,b)

 expect(result).toBe(a - b )
 })

 test('should subtract two negative number', () => { 
 
 const a = -2
 const b = 4 
    
    const result = subtract(a,b)

    expect(result).toBe(a-b)
 })

})

describe('multiply', ()=>{
 test('should multiply two positive numbers', () => { 
 
 const a = 2
 const b= 2 
 
 const result = multiply(a,b)

 expect(result).toBe(a * b )
 })

 test('should multiply two negative number', () => { 
 
 const a = -2
 const b = 4 
    
    const result = multiply(a,b)

    expect(result).toBe(a*b)
 })

})