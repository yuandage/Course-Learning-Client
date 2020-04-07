<template>
  <div class="course-comment">
    <div class="sendComment">
      <div class="profile-picture">
        <img width="50" height="50" src="@/assets/avatar.gif">
      </div>
      <div class="textarea-container">
        <el-input
          v-model="textarea"
          type="textarea"
          :rows="3"
          placeholder="扯淡、吐槽、表扬、鼓励……想说啥就说啥！"
          maxlength="150"
          show-word-limit
          resize="none">
        </el-input>
      </div>
      <el-button type="primary" @click="sendComment">发表评论</el-button>
    </div>
    <div v-if="comment.length>0">
      <div v-for="item in comment" :key="item.id" class="comment-box">
        <div class="profile-picture">
          <router-link :to="{ name: 'userInfo',params: {username: item.username,userNav: 'home'}}">
            <img width="50" height="50" src="@/assets/avatar.gif">
          </router-link>
        </div>
        <div class="comment-info">
          <router-link
            class="mg"
            :to="{ name: 'userInfo',params: {username: item.username,userNav: 'home'}}">
            {{ item.username }}
          </router-link>
          <p class="mg">{{ item.content }}</p>
          <span class="mg">6小时前</span>
        </div>
      </div>
    </div>
    <div v-else class="comment-box no-comment">
      <p>暂无评论</p>
    </div>
  </div>
</template>

<script>
import { Notification } from 'element-ui'

import { getUserInfo } from '@/util/dataStorage'

import { addComment, findByCourseId } from '@/api/course_comment'

export default {
  name: 'CourseComment',
  props: {
    courseId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      textarea: '',
      user: getUserInfo(),
      comment: []
    }
  },
  created() {
    this.getComment()
  },
  methods: {
    sendComment() {
      const comment = {
        userId: this.user.id,
        courseId: this.courseId,
        username: this.user.username,
        content: this.textarea
      }
      this.comment.unshift(comment)
      addComment(comment).then(res => {
        if (res.data.code === 20000) {
          Notification({
            title: '成功!',
            message: '评论发表成功!',
            type: 'success',
            duration: 1000, //2秒关闭
            offset: 50
          })
          this.textarea = ''
        }
      })
    },
    getComment() {
      findByCourseId(this.courseId).then(res => {
        if (res.data.code === 20000) {
          this.comment = res.data.data
        }
      })
    }
  }
}
</script>

<style>
    .sendComment {
        display: flex;
        justify-content: space-between;
        background: #fff;
        box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
        border-radius: 12px;
        padding: 10px;
        margin: 15px 5px;
    }

    .textarea-container {
        width: 540px;
    }

    .no-comment {
        height: 50px;
        align-items: center;
    }

    .comment-box {
        display: flex;
        justify-content: space-around;
        background: #fff;
        box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
        border-radius: 12px;
        padding: 10px;
        margin: 15px 5px;
    }

    .profile-picture img {
        width: 50px;
        height: 50px;
        border-color: #4d5559;
        border-radius: 50%;
    }

    .comment-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 700px;
    }

    .comment-info a {
        color: #6d757a;
    }

    .comment-info p {
        line-height: 20px;
        font-size: 14px;
        word-wrap: break-word;
        word-break: break-word;
    }

    .comment-info span {
        color: #99a2aa;
    }

    .mg {
        margin: 5px;
    }
</style>
