import React from 'react'
import { css } from '@emotion/css'
import { TextInput, Select, Button, Icon, Checkbox } from 'react-materialize'

export default function Form() {
  const css_button = css`
    margin-top: 2rem;
    background-color: #123ba4cc;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  `
  const css_checkbox = css`
    & + span:not(.lever) {
      margin-top: 2rem;
    }
  `
  const css_select = css`
    input.select-dropdown {
      color: #9e9e9e;
      font-size: 1rem;
      padding-left: 0.75rem;
    }
  `

  return (
    <form>
      <TextInput label="ニックネーム" />
      <TextInput label="メールアドレス" type="email" />
      <TextInput label="Twitterアカウント" />
      <Select
        multiple
        options={{
          classes: css_select,
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          },
        }}
        value={['']}
      >
        <option disabled value="">
          弾ける楽器
        </option>
        <option value="1">Guitar</option>
        <option value="2">Bass</option>
        <option value="3">Drums</option>
      </Select>
      <TextInput label="演奏動画のリンク" type="url" />
      <Select
        multiple
        options={{
          classes: css_select,
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250,
          },
        }}
        value={['']}
      >
        <option disabled value="">
          投稿したい記事
        </option>
        <option value="1">各曲演奏法解説</option>
        <option value="2">機材考察や機材選びのコツ</option>
      </Select>
      <Checkbox
        value="1"
        className={css_checkbox}
        label="ご入力いただいたニックネームとメールアドレスは、当サイトに投稿者(or寄稿者)ユーザーとして登録するために使用します。 加えて、ご入力いただいたメールアドレスまたはTwitterアカウントのDMをサイト管理者との連絡手段として使用することに差し支えがなければ、チェックを入れてください。"
      />
      <Button node="button" type="submit" waves="light" className={css_button}>
        送信
        <Icon right>send</Icon>
      </Button>
    </form>
  )
}
