import PageWrapper from '@/components/PageWrapper'

export default function Success() {
  console.log('渲染');
  return <PageWrapper title="pageWrapper">
    <h1>感谢你的参与</h1>
    <p>问卷提交成功！！</p>
  </PageWrapper>
}