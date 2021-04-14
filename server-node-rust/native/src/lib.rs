use neon::prelude::*;

fn soma_pares(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let mut soma: i32 = 0;
    for i in 0..10001 {
        if i % 2 == 0 {
            soma += i;
        }
    }
    Ok(cx.number(soma))
}

// fn calc_fibonacci(mut cx: FunctionContext) -> JsResult<JsNumber> {
//     let result = cx.number(fibonacci(10000));
//     println!("{}", result);
//     Ok(result)
// }

register_module!(mut cx, { cx.export_function("soma_pares", soma_pares) });
