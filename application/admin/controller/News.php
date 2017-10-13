<?php

namespace app\admin\controller;

use app\admin\model\NewsModel;
class News extends Base
{
    //公告列表
    public function index(){
        if(request()->isAjax()){
            $param = input('param.');
            $limit = $param['pageSize'];
            $offset = ($param['pageNumber'] - 1) * $limit;
            $where = [];
            if (isset($param['searchText']) && !empty($param['searchText'])) {
                $where['title'] = ['like', '%' . $param['searchText'] . '%'];
            }
            $news = new NewsModel();
            $type = config('news_type');
            $selectResult = $news->getNewsByWhere($where, $offset, $limit);
            foreach($selectResult as $key=>$vo){
                $selectResult[$key]['type'] = $type[$vo['type']];
                $selectResult[$key]['operate'] = showOperate($this->makeButton($vo['id']));
            }
            $return['total'] = $news->getAllNews($where);  //总数据
            // dump($return);exit;
            $return['rows'] = $selectResult;
            return json($return);
        }
        return $this->fetch();
    }


    //添加公告

    public function newsAdd()
    {
        if(request()->isPost()){
            $param = input('param.');
            $param = parseParams($param['data']);

            $param['created_at'] = $param['updated_at'] = time();

            // dump($param);die;
            /*$news = new NewsModel();
            $flag = $news->insertNews($param);*/
            $res = db('news')->insertGetId($param);
            if($res>0){
               return json(['code' => 0, 'data' => '', 'msg' => '添加成功']); 
            }
            // return json(['code' => $flag['code'], 'data' => $flag['data'], 'msg' => $flag['msg']]);
        }

        return $this->fetch();

    }

    //编辑公告
    public function newsEdit(){
        $news = new NewsModel();
        if(request()->isPost()){
            $param = input('param.');
            $param = parseParams($param['data']);
            $param['updated_at'] = time();
            $flag = $news->editNews($param);
            return json(['code' => $flag['code'], 'data' => $flag['data'], 'msg' => $flag['msg']]);

        }
        $id = input('param.id');
        $newss = $news->getOneNews($id);

        $this->assign([
            'news' => $newss,
        ]);
        return $this->fetch();
    }

    //删除公告
    public function newsDel(){
        $id = input('param.id');
        $news = new NewsModel();
        $flag = $news->delNews($id);
        return json(['code' => $flag['code'], 'data' => $flag['data'], 'msg' => $flag['msg']]);
    }
    /**
     * 拼装操作按钮
     * @param $id
     * @return array
     */
    private function makeButton($id)
    {
        return [
            '编辑' => [
                'auth' => 'news/newsedit',
                'href' => url('news/newsEdit', ['id' => $id]),
                'btnStyle' => 'primary',
                'icon' => 'fa fa-paste'
            ],
            '删除' => [
                'auth' => 'news/newsdel',
                'href' => "javascript:userDel(" .$id .")",
                'btnStyle' => 'danger',
                'icon' => 'fa fa-trash-o'
            ]
        ];
    }

}
