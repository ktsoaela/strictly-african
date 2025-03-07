<?php

    use App\Http\Controllers\NewsController;

    Route::get('/news/top-headlines', [NewsController::class, 'getTopHeadlines']);
    Route::get('/news/everything', [NewsController::class, 'getEverything']);
    Route::get('/news/sources', [NewsController::class, 'getSources']);
    Route::get('/news/article/{articleId}', [NewsController::class, 'getArticle']);
    Route::post('/news/save-for-offline', [NewsController::class, 'saveForOffline']);
    Route::get('/news/offline-articles', [NewsController::class, 'getOfflineArticles']);
    Route::post('/news/update-settings', [NewsController::class, 'updateSettings']);
    Route::delete('/news/offline-articles/{id}', [NewsController::class, 'removeOfflineArticle']);



