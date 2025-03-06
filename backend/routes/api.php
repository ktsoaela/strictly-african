<?php

    use App\Http\Controllers\NewsController;
    use App\Http\Controllers\SavedArticleController;
    use App\Http\Middleware\ClerkAuthMiddleware;

    Route::get('/news/top-headlines', [NewsController::class, 'getTopHeadlines']);
    Route::get('/news/everything', [NewsController::class, 'getEverything']);
    Route::get('/news/sources', [NewsController::class, 'getSources']);
    Route::get('/news/article/{articleId}', [NewsController::class, 'getArticle']);
    Route::post('/news/save-for-offline', [NewsController::class, 'saveForOffline']);
    Route::get('/news/offline-articles', [NewsController::class, 'getOfflineArticles']);
    Route::post('/news/update-settings', [NewsController::class, 'updateSettings']);
    Route::delete('/news/offline-articles/{id}', [NewsController::class, 'removeOfflineArticle']);

    Route::middleware([ClerkAuthMiddleware::class])->group(function () {
        Route::get('/news/saved-articles', [SavedArticleController::class, 'index']);
        Route::post('/news/saved-articles', [SavedArticleController::class, 'store']);
        Route::delete('/news/saved-articles/{id}', [SavedArticleController::class, 'destroy']);
    });


