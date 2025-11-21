// // ======================
// // Switch文
// // ======================
// // ある値に応じて分岐する文。case に合うところが実行され、breakで抜ける。
// function switchSample(color) {
//   switch (color) {
//     case 'red':
//       return 'とまれ';
//     case 'blue':
//       return 'すすんでOK';
//     default:
//       return 'わからない色';
//   }
// }
// // 問題（答えは下に）：
// // 1) "yellow" が来たら "きをつけて" を返す switch を作ろう
// // 2) 数字 1,2,3 で "いち","に","さん" を返す switch を作ろう
// // 3) 好きな果物2つにメッセージを返し、それ以外は "しらない" を返す switch を作ろう
// // --- 回答例 ---
// function qSwitch1(light) {
//   switch (light) {
//     case 'yellow':
//       return 'きをつけて';
//     default:
//       return 'は？?';
//   }
// }
// function qSwitch2(n) {
//   switch (n) {
//     case 1:
//       return 'いち';
//     case 2:
//       return 'に';
//     case 3:
//       return 'さん';
//     default:
//       return 'それ以外';
//   }
// }
// function qSwitch3(fruit) {
//   switch (fruit) {
//     case 'apple':
//       return 'りんご！';
//     case 'banana':
//       return 'ばなな！';
//     default:
//       return 'しらない';
//   }
// }

// // ======================
// // while文
// // ======================
// // 条件がtrueの間、繰り返す。
// function whileSample() {
//   let i = 0;
//   while (i < 3) {
//     console.log('while:', i);
//     i++;
//   }
// }
// // 問題：
// // 1) 1から3までを出力する while を書こう
// // 2) 5から1までカウントダウンする while を書こう
// // 3) 好きな回数だけ「がんばれ」を出力する while を書こう
// // --- 回答例 ---
// function qWhile1() {
//   let i = 1;
//   while (i <= 3) {
//     console.log(i);
//     i++;
//   }
// }
// function qWhile2() {
//   let n = 5;
//   while (n >= 1) {
//     console.log(n);
//     n--;
//   }
// }
// function qWhile3(times) {
//   let t = 0;
//   while (t < times) {
//     console.log('がんばれ');
//     t++;
//   }
// }

// // ======================
// // do-while文
// // ======================
// // 最初に1回実行してから、条件がtrueなら続ける。
// function doWhileSample() {
//   let i = 0;
//   do {
//     console.log('do-while:', i);
//     i++;
//   } while (i < 2);
// }
// // 問題：
// // 1) 1回だけ「はじめて」を出力する do-while を書こう
// // 2) 1から3まで出力する do-while を書こう
// // 3) 0から2を出力する do-while を書こう
// // --- 回答例 ---
// function qDoWhile1() {
//   let done = false;
//   do {
//     console.log('はじめて');
//     done = true;
//   } while (!done);
// }
// function qDoWhile2() {
//   let i = 1;
//   do {
//     console.log(i);
//     i++;
//   } while (i <= 3);
// }
// function qDoWhile3() {
//   let i = 0;
//   do {
//     console.log(i);
//     i++;
//   } while (i < 3);
// }

// // ======================
// // for文
// // ======================
// // 回数を決めて繰り返す基本の形。
// function forSample() {
//   for (let i = 0; i < 3; i++) {
//     console.log('for:', i);
//   }
// }
// // 問題：
// // 1) 1から5まで出力する for を書こう
// // 2) 2の段（2,4,6,8,10）を出力する for を書こう
// // 3) 5回「OK」を出力する for を書こう
// // --- 回答例 ---
// function qFor1() {
//   for (let i = 1; i <= 5; i++) console.log(i);
// }
// function qFor2() {
//   for (let n = 1; n <= 5; n++) console.log(2 * n);
// }
// function qFor3() {
//   for (let i = 0; i < 5; i++) console.log('OK');
// }

// // ======================
// // for-of文
// // ======================
// // 配列の中身（値）を1つずつ取り出す。
// function forOfSample() {
//   const fruits = ['apple', 'banana', 'orange'];
//   for (const f of fruits) {
//     console.log('for-of:', f);
//   }
// }
// // 問題：
// // 1) ["a","b","c"] を for-of で出力しよう
// // 2) [1,2,3] の合計を for-of で計算しよう
// // 3) 好きな3つの動物を for-of で出力しよう
// // --- 回答例 ---
// function qForOf1() {
//   for (const c of ['a', 'b', 'c']) console.log(c);
// }
// function qForOf2() {
//   let sum = 0;
//   for (const n of [1, 2, 3]) sum += n;
//   console.log(sum);
// }
// function qForOf3() {
//   for (const animal of ['cat', 'dog', 'fox']) console.log(animal);
// }

// // ======================
// // for-in文
// // ======================
// // オブジェクトのキー名を1つずつ取り出す。
// function forInSample() {
//   const score = { math: 90, eng: 80 };
//   for (const key in score) {
//     console.log(key, score[key]);
//   }
// }
// // 問題：
// // 1) {red: "#f00", blue: "#00f"} のキーと値を出力しよう
// // 2) {a:1, b:2, c:3} の合計を計算しよう
// // 3) 自分のプロフィールキーと値を出力しよう（name, ageなど）
// // --- 回答例 ---
// function qForIn1() {
//   const colors = { red: '#f00', blue: '#00f' };
//   for (const k in colors) console.log(k, colors[k]);
// }
// function qForIn2() {
//   const obj = { a: 1, b: 2, c: 3 };
//   let total = 0;
//   for (const k in obj) total += obj[k];
//   console.log(total);
// }
// function qForIn3() {
//   const me = { name: 'Taro', age: 10 };
//   for (const k in me) console.log(k, me[k]);
// }

// // ======================
// // break と continue
// // ======================
// // break: ループを中断して抜ける / continue: その回だけスキップ。
// function breakContinueSample() {
//   for (let i = 0; i < 5; i++) {
//     if (i === 3) break;
//     console.log('break続行:', i);
//   }
//   for (let j = 0; j < 5; j++) {
//     if (j === 2) continue;
//     console.log('continue通過:', j);
//   }
// }
// // 問題：
// // 1) 1〜5を出力中、3で止める break を使おう
// // 2) 0〜4を出力中、2を飛ばす continue を使おう
// // 3) 1〜10で偶数だけ出力する continue を使おう
// // --- 回答例 ---
// function qBreak1() {
//   for (let i = 1; i <= 5; i++) {
//     if (i === 3) break;
//     console.log(i);
//   }
// }
// function qContinue1() {
//   for (let i = 0; i < 5; i++) {
//     if (i === 2) continue;
//     console.log(i);
//   }
// }
// function qContinue2() {
//   for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) continue;
//     console.log(i);
//   }
// }

// // ======================
// // try-catch文
// // ======================
// // エラーが出ても catch でつかんで続ける。
// function tryCatchSample(value) {
//   try {
//     const n = Number(value);
//     if (Number.isNaN(n)) throw new Error('数字じゃない');
//     return n * 2;
//   } catch (e) {
//     return 'エラー：' + e.message;
//   }
// }
// // 問題：
// // 1) 数字以外なら「エラー」と表示する try-catch を書こう
// // 2) 分母が0なら「わらないで」と出す try-catch を書こう
// // 3) 配列の3番目が無いとき「ないよ」と出す try-catch を書こう
// // --- 回答例 ---
// function qTryCatch1(x) {
//   try {
//     const n = Number(x);
//     if (Number.isNaN(n)) throw new Error('エラー');
//     console.log(n);
//   } catch (e) {
//     console.log('エラー');
//   }
// }
// function qTryCatch2(a, b) {
//   try {
//     if (b === 0) throw new Error('わらないで');
//     console.log(a / b);
//   } catch (e) {
//     console.log(e.message);
//   }
// }
// function qTryCatch3(arr) {
//   try {
//     if (arr[2] === undefined) throw new Error('ないよ');
//     console.log(arr[2]);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// // ======================
// // try-catch-finally文
// // ======================
// // finally は 成功/失敗どちらでも最後に実行される。
// function tryCatchFinallySample() {
//   try {
//     console.log('挑戦');
//   } catch (e) {
//     console.log('失敗');
//   } finally {
//     console.log('おわり');
//   }
// }
// // 問題：
// // 1) 計算成功でも失敗でも最後に「end」と出す finally を書こう
// // 2) 配列の長さを出し、エラーでも最後に「done」と出すコードを書こう
// // 3) 文字列を大文字にし、エラーでも最後に「finish」と出すコードを書こう
// // --- 回答例 ---
// function qTryCatchFinally1(a, b) {
//   try {
//     console.log(a + b);
//   } catch (e) {
//     console.log('error');
//   } finally {
//     console.log('end');
//   }
// }
// function qTryCatchFinally2(arr) {
//   try {
//     if (!Array.isArray(arr)) throw new Error('not array');
//     console.log(arr.length);
//   } catch (e) {
//     console.log('error');
//   } finally {
//     console.log('done');
//   }
// }
// function qTryCatchFinally3(str) {
//   try {
//     console.log(str.toUpperCase());
//   } catch (e) {
//     console.log('error');
//   } finally {
//     console.log('finish');
//   }
// }

// // ======================
// // throw文
// // ======================
// // 自分で「ここはエラー」と投げる。
// function throwSample(age) {
//   if (age < 0) throw new Error('年齢がマイナスはだめ');
//   return age;
// }
// // 問題：
// // 1) 名前が空なら throw する関数を書こう
// // 2) 点数が100より大きいなら throw する関数を書こう
// // 3) パスワードが短すぎたら throw する関数を書こう
// // --- 回答例 ---
// function qThrow1(name) {
//   if (!name) throw new Error('なまえなし');
//   return 'OK';
// }
// function qThrow2(score) {
//   if (score > 100) throw new Error('でかすぎ');
//   return 'OK';
// }
// function qThrow3(pass) {
//   if (pass.length < 4) throw new Error('みじかい');
//   return 'OK';
// }

// // どの関数も console.log で動きを確かめてみてね。
// // const add = (a, b) => a + b;
// // console.log(add(2, 3));

// // let result = 5;
// // result += 10;
// // console.log(result);

// // let array = [1, 2, 3, 4, 5];
// // array.push(6);
// // console.log(array);

// // for (let i = 0; i < array.length; i++) {
// //   console.log(array[i]);
// // }

// // const cofee = {
// //   name: 'Latte',
// //   price: 300,
// //   size: 'Medium',
// //   isHot: true,
// //   toppings: ['Whipped Cream', 'Cinnamon'],
// //   nutrition: {
// //     calories: 150,
// //     sugar: '12g',
// //     fat: '5g',
// //   },
// // };

// // console.log(cofee.nutrition.calories);
// // console.log(cofee.toppings[0]);
// // console.log(cofee.nutrition);
// // console.log(cofee.isHot);

// // function addd(num1, num2) {
// //   return num1 + num2;
// // }

// // const returnedValue = addd(5, 10);
// // console.log(returnedValue);
// // console.log(returnedValue);

// function vegetableColor(vegetable) {
//   switch (vegetable) {
//     case 2 && 4:
//       console.log('tomato is red');
//       break;
//     case 'cucumber':
//       console.log('cucumber is green');
//       break;
//     default:
//       console.log('unknown vegetable');
//   }
//   // if (vegetable === 'tomato') {
//   //   console.log('tomato is red');
//   // } else if (vegetable === 'cucumber') {
//   //   console.log('cucumber is green');
//   // } else {
//   //   console.log('unknown vegetable');
//   // }
// }

// vegetableColor(2 && 4);
