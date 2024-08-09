const tg = window.Telegram.WebApp;

export function useTelegram () {
    const onCloseApp = () => {
        tg.close();
      };

      const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            return tg.MainButton.hide()
        } else{
            tg.MainButton.show()
        }
      };

      return{
        onCloseApp,
        onToggleButton,
        tg,
        user:tg.initDataUnSafe?.user,
        queryId:tg.initDataUnSafe?.query_id,
      }
}