/**
 * Менеджер сцен. 
 * Работает в общем со сценами, отвечает за их загрузку и создание. 
 * Все сцены отрабатываются и загружаются без перезагрузки страницы. 
 */
 
 
// Основной класс. 
export class SceneMenager
{
    // Класс сцены. 
    static class CScene
    {
        constructor(Params)
        {
            this.HTML = Params.HTML
            this.IsLoaded = false
        }
        
        // Загружает сцену на экран. 
        // При этом все другие сцены должны быть закрыты (для избежания багов). 
        // Пример использования:
        /*
            var scene = new Scene()
            scene.Load() // Опустошит страницу
        */
        Load() 
        {
            document.body.innerHTML = this.HTML
        }
        
        // Событие сработает при загрузке сцена. 
        // Параметр Action - функция или call back действия при событии. 
        // Пример использования:
        /* 
            Scene.OnLoad((scene) => {
                console.log(scene.IsLoaded)
            })
        */
        OnLoad(Action)
        {
            this.#action = Action
        }
    }
    
    // Вернёт новую сцены по выходным параметрам. 
    // Параметр HTML - HTML разметка которая отображается при загрузке сцены. 
    // Пример использования:
    /*
        var scene = new Scene({ HTML: "<p>Hi</p>" })
    */
    static Scene(SceneParameters = {}) 
    {
        CreatingParams = SceneParameters.assign({
            HTML: ""
        })
        return new CScene(CreatingParams)
    }
    
    // Загрузит сцену на экран. 
    // Параметр Scene - сцена для загрузки. 
    // Пример использования:
    /*
        LoadScene(new Scene()) // новая пустая сцена
    */
    static LoadScene(Scene)
    {
        if (!Scene.Load) throw new Error(`JWP Error: Method "Load" in Scene is not defined`)
        Scene.Load() 
    }
}