function merge<A,B>(a:A, b:B):A&B {
    return {
        ...a,
        ...b
    };
}

// 제너릭은  TS에서 함수, 클래스, interface, type alias를 사용하게 될 때 
// 여러 종류의 타입에 대하여 호환을 맞춰야하는 상황에서 사용하는문법

const merged = merge({foo:1},{bar:2});
console.log(merged);

function wrap<T>(param:T) {
    return {
        param
    }
}

const wrapped = wrap(10);