import {ScrollView} from 'react-native';

type PageContainerProps = {
  children?: React.ReactNode;
};

function PageContainer({children}: PageContainerProps) {
  return (
    <ScrollView
      style={{backgroundColor: '#f6f5f3', flex: 1}}
      contentContainerStyle={{
        padding: 10,
      }}>
      {children}
    </ScrollView>
  );
}

export default PageContainer;
