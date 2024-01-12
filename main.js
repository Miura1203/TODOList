document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());

const onClickAdd = () => {
  if (!document.getElementById("addText").value == "") {
    // 入力された値の代入
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = "";

    // タグの作成
    const li = document.createElement("li");
    const div = document.createElement("div");
    const ptag = document.createElement("p");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    div.classList = "listRow";
    completeButton.innerHTML = "完了";
    deleteButton.innerHTML = "削除";

    // liタグの子要素を設定
    li.appendChild(div);
    div.appendChild(ptag);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    ptag.innerHTML = inputText;

    // 未完了のTODOに追加
    document.getElementById("inConpleteList").appendChild(li);

    // 削除ボタン
    deleteButton.addEventListener("click", () => {
      // parentNode = 特定の要素(ノード)の親要素(ペアレントノード)があるかを確認する
      // deleteButtonを押したliタグがどれか確認する
      const deleteTarget = div.parentNode;
      document.getElementById("inConpleteList").removeChild(deleteTarget);
    });
    // 完了ボタン
    completeButton.addEventListener("click", () => {
      // 完了ボタンを押されたリストを削除
      const deleteTarget = div.parentNode;
      document.getElementById("inConpleteList").removeChild(deleteTarget);

      // 完了したTODOリストに追加
      const addTarget = ptag.parentNode;
      // firstElementChild = 要素の中にある一番最初の子要素を指定
      const text = addTarget.firstElementChild.innerHTML;
      // addTargetの中身を空にする
      addTarget.textContent = null;
      // ボタン作成
      const backButton = document.createElement("button");
      // console.log(backButton);
      backButton.innerHTML = "戻す";

      addTarget.appendChild(ptag);
      addTarget.appendChild(backButton);
      ptag.innerHTML = text;

      document.getElementById("conpleteList").appendChild(addTarget.parentNode);

      // 戻すボタンを押したとき未完了リストに戻す
      backButton.addEventListener("click", () => {
        // addTargetの中身を空にする
        addTarget.textContent = null;

        addTarget.appendChild(ptag);
        addTarget.appendChild(completeButton);
        addTarget.appendChild(deleteButton);
        // 未完了リストに追加
        document
          .getElementById("inConpleteList")
          .appendChild(addTarget.parentNode);
      });
    });
  }
};
