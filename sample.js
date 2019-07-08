$(document).ready(function(){
let changevalueflg = 0;
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let count = subject_points.length;
    // 平均点を計算
    let avarage = sum / count;
    //「平均点：」となっている右の部分に平均点が出力される
    $("#avarage_indicate").text(avarage);

    //合計点、平均点の表示完了
    changevalueflg = 1;
  };
  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む

    //合計点、平均点の表示完了していない場合は実行
    if (changevalueflg !==1) {
      score_indicate();
    }
    // 画面上の平均点を取得
    let avarage = Number($("#avarage_indicate").text());
    // console.log($("#avarage_indicate").text());
    console.log(avarage);
    let str = "D";
    if (avarage >= 80) {
      str = "A";
    } else if (avarage >= 60) {
      str = "B";
    } else if (avarage >= 40) {
      str = "C";
    }
    //「ランク：」の後に結果をセット
    $("#evaluation").text(str);
    // 文字列を返す
    return str;

  }

  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    //合計点、平均点の表示完了していない場合は実行
    if (changevalueflg !==1) {
      score_indicate();
    }

    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    //配列の個数を取得
    let count = subject_points.length;
    let str = "合格";
    //点数を1つずつチェック
    for ( i = 0; i<count;i++){
      if (subject_points[i] < 60) {
        str = "不合格";
        break;
      }
    }
    //「判定：」の後に結果をセット
    $("#judge").text(str);
    // 文字列を返す
    return str;
  }
  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。

    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${get_achievement()}です。${get_pass_or_failure()}です</label>`);
  };
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとJqueryの両方の記述を使用しているが、どちらかに統一しても構わない
