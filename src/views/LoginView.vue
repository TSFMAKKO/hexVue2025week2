<template>
    <h2>登入</h2>
    <!-- login_page -->
    <div id="loginPage" class="bg-yellow">
        <div class="conatiner loginPage vhContainer">
            <div class="side">
                <router-link to="/">
                    <img class="logoImg"
                        src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
                        alt="待辦事項">
                </router-link>
                <img class="d-m-n"
                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
                    alt="工作圖片">
            </div>
            <div>
                <form class="formControls" @submit.prevent="handleLogin">
                    <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
                    <label class="formControls_label" for="email">Email</label>
                    <input 
                        class="formControls_input" 
                        type="email" 
                        id="email" 
                        v-model="email" 
                        placeholder="請輸入 email" 
                        required>
                    <span v-if="error.email" class="error-message">{{ error.email }}</span>
                    
                    <label class="formControls_label" for="pwd">密碼</label>
                    <input 
                        class="formControls_input" 
                        type="password" 
                        id="pwd" 
                        v-model="password" 
                        placeholder="請輸入密碼" 
                        required>
                    <span v-if="error.password" class="error-message">{{ error.password }}</span>
                    
                    <button type="submit" class="formControls_btnSubmit">登入</button>
                    <router-link to="/signup" class="formControls_btnLink">註冊帳號</router-link>
                </form>
            </div>
        </div>
    </div>

    <!-- sign up -->
    <div id="signUpPage" class="bg-yellow">
        <div class="conatiner signUpPage vhContainer">
            <div class="side">
                <a href="#"><img class="logoImg"
                        src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
                        alt=""></a>
                <img class="d-m-n"
                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
                    alt="workImg">
            </div>
            <div>
                <form class="formControls" action="index.html">
                    <h2 class="formControls_txt">註冊帳號</h2>
                    <label class="formControls_label" for="email">Email</label>
                    <input class="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email"
                        required>
                    <label class="formControls_label" for="name">您的暱稱</label>
                    <input class="formControls_input" type="text" name="name" id="name" placeholder="請輸入您的暱稱">
                    <label class="formControls_label" for="pwd">密碼</label>
                    <input class="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required>
                    <label class="formControls_label" for="pwd">再次輸入密碼</label>
                    <input class="formControls_input" type="password" name="pwd" id="pwd" placeholder="請再次輸入密碼"
                        required>
                    <input class="formControls_btnSubmit" type="button"
                        onclick="javascript:location.href='#todoListPage'" value="註冊帳號">
                    <a class="formControls_btnLink" href="#loginPage">登入</a>
                </form>
            </div>
        </div>

    </div>

    <!-- ToDo List -->
    <div id="todoListPage" class="bg-half">
        <nav>
            <h1><a href="#">ONLINE TODO LIST</a></h1>
            <ul>
                <li class="todo_sm"><a href="#"><span>王小明的代辦</span></a></li>
                <li><a href="#loginPage">登出</a></li>
            </ul>
        </nav>
        <div class="conatiner todoListPage vhContainer">
            <div class="todoList_Content">
                <div class="inputBox">
                    <input type="text" placeholder="請輸入待辦事項">
                    <a href="#">
                        <i class="fa fa-plus"></i>
                    </a>
                </div>
                <div class="todoList_list">
                    <ul class="todoList_tab">
                        <li><a href="#" class="active">全部</a></li>
                        <li><a href="#">待完成</a></li>
                        <li><a href="#">已完成</a></li>
                    </ul>
                    <div class="todoList_items">
                        <ul class="todoList_item">
                            <li>
                                <label class="todoList_label">
                                    <input class="todoList_input" type="checkbox" value="true">
                                    <span>把冰箱發霉的檸檬拿去丟</span>
                                </label>
                                <a href="#">
                                    <i class="fa fa-times"></i>
                                </a>
                            </li>
                            <li>
                                <label class="todoList_label">
                                    <input class="todoList_input" type="checkbox" value="true">
                                    <span>打電話叫媽媽匯款給我</span>
                                </label>
                                <a href="#">
                                    <i class="fa fa-times"></i>
                                </a>
                            </li>
                            <li>
                                <label class="todoList_label">
                                    <input class="todoList_input" type="checkbox" value="true">
                                    <span>整理電腦資料夾</span>
                                </label>
                                <a href="#">
                                    <i class="fa fa-times"></i>
                                </a>
                            </li>
                            <li>
                                <label class="todoList_label">
                                    <input class="todoList_input" type="checkbox" value="true">
                                    <span>繳電費水費瓦斯費</span>
                                </label>
                                <a href="#">
                                    <i class="fa fa-times"></i>
                                </a>
                            </li>
                            <li>
                                <label class="todoList_label">
                                    <input class="todoList_input" type="checkbox" value="true">
                                    <span>約vicky禮拜三泡溫泉</span>
                                </label>
                                <a href="#">
                                    <i class="fa fa-times"></i>
                                </a>
                            </li>
                            <li>
                                <label class="todoList_label">
                                    <input class="todoList_input" type="checkbox" value="true">
                                    <span>約ada禮拜四吃晚餐</span>
                                </label>
                                <a href="#">
                                    <i class="fa fa-times"></i>
                                </a>
                            </li>
                        </ul>
                        <div class="todoList_statistics">
                            <p> 5 個已完成項目</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');

const handleLogin = () => {
  // 簡單的驗證
  if (!email.value || !password.value) {
    error.value = '請填寫所有欄位';
    return;
  }
  
  // 這裡應該發送 API 請求進行登入驗證
  // 模擬登入成功
  console.log('登入資訊:', { email: email.value, password: password.value });
  
  // 登入成功後跳轉到待辦事項頁面
  router.push('/todos');
};
</script>

<style scoped>
.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}
</style>
