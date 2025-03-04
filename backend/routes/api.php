<?php
    
    use App\Http\Controllers\NewsController;

    Route::get('/news/top-headlines', [NewsController::class, 'getTopHeadlines']);
    Route::get('/news/everything', [NewsController::class, 'getEverything']);
    Route::get('/news/sources', [NewsController::class, 'getSources']);
    Route::get('/news/article/{articleId}', [NewsController::class, 'getArticle']); 
