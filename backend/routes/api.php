<?php

    use App\Http\Controllers\NewsController;
    use App\Http\Controllers\SavedArticleController;
    use App\Http\Middleware\ClerkAuthMiddleware;



    Route::get('/news/top-headlines', [NewsController::class, 'getTopHeadlines']);
    Route::get('/news/everything', [NewsController::class, 'getEverything']);
    Route::get('/news/sources', [NewsController::class, 'getSources']);
    Route::get('/news/article/{articleId}', [NewsController::class, 'getArticle']);

//    Route::middleware([ClerkAuthMiddleware::class])->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/news/saved-articles', [SavedArticleController::class, 'index']);
        Route::post('/news/saved-articles', [SavedArticleController::class, 'store']);
        Route::delete('/news/saved-articles/{id}', [SavedArticleController::class, 'destroy']);
    });
