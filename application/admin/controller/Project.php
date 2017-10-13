<?php

namespace app\admin\controller;
use app\admin\model\ProjectModel;
use app\admin\model\UsersModel;
use think\File;
use think\Request;

class Project extends Base
{
    #项目列表展示
    public function index()
    {   
        if( request()->isAjax() ){   
            #获取参数
            $param = input('param.');
            $where = [];
            $limit = $param['pageSize'];
            $offset = ($param['pageNumber'] - 1) * $limit;
            $name = $param['searchText'];
            #组合查询条件
            if ( !empty($name) ) {
                $where['name'] = ['like','%'.$name.'%'];
            }

            #查询数据
            $ProjectModel = new ProjectModel();

            $data = $ProjectModel-> getProjectByWhere($where,$limit,$offset);

            #项目状态
            $status = config('project_status');

            // 拼装参数
            foreach($data as $key=>$vo){
                $data[$key]['operate'] = '';
                $data[$key]['created_at'] = date('Y-m-d H:i:s', $vo['created_at']);
                #拼装操作字符串
                if ( $vo['project_status'] == 3 ) {
                    $data[$key]['operate'] = showOperate( $this->makeButton($vo['id'],1) );
                }else{
                    $data[$key]['operate'] = showOperate( $this->makeButton($vo['id'],2) );
                }
                $data[$key]['project_status'] = $status[$vo['project_status']];
                #组合发项目人信息
                if ($vo->link_account == 0) {
                    $data[$key]['username']  = '平台';
                    $data[$key]['userphone']  = '';
                }else{
                    $data[$key]['username'] = $vo->users->truename;
                    $data[$key]['userphone'] = $vo->users->phone;                    
                }

            }
            $return['total'] = $ProjectModel->getProjectCount($where);  //总数据
            $return['rows'] = $data;
            return json($return);
        }

        return $this->fetch();
    }



    #添加按钮
    private function makeButton($id,$type)
    {   
        if ( $type == 2 ) {
            return [
                '详情' => [
                    'auth' => 'project/detail',
                    'href' => url('project/detail', ['id' => $id]),
                    'btnStyle' => 'primary',
                    'icon' => 'fa fa-paste'
                ],
                '编辑' => [
                    'auth' => 'project/edit',
                    'href' => url('project/edit', ['id' => $id]),
                    'btnStyle' => 'warning',
                    'icon' => 'fa fa-paste'
                ]
            ];
        }else{

            return [
                '同意' => [
                    'auth' => 'project/project_status',
                    'href' => "javascript:project_status(" .$id ."," . 1 .")",
                    'btnStyle' => 'primary',
                    'icon' => 'fa fa-paste'
                ],
                '驳回' => [
                    'auth' => 'project/project_status',
                    'href' => "javascript:project_status(" .$id."," . 2 .")",
                    'btnStyle' => 'primary',
                    'icon' => 'fa fa-paste'
                ],
                '详情' => [
                    'auth' => 'project/detail',
                    'href' => url('project/detail', ['id' => $id]),
                    'btnStyle' => 'primary',
                    'icon' => 'fa fa-paste'
                ],
                '编辑' => [
                    'auth' => 'project/edit',
                    'href' => url('project/edit', ['id' => $id]),
                    'btnStyle' => 'warning',
                    'icon' => 'fa fa-paste'
                ]
            ];            
        }

    }

    #添加项目
    public function add()
    {   
        #判断是否为post请求
        if ( request()->isPost() ) {
            
            // $data = input('param.');
            $data = $_POST;

            $data['start_times'] = strtotime($data['start_times']);
            $data['end_time'] = strtotime($data['end_time']) + 86399;
            $data['created_at'] = time();
            $data['updated_at'] = time();

            $ProjectModel = new ProjectModel();

            $res  = $ProjectModel->goInsert($data);

            return json(msg($res['code'], $res['data'], $res['msg']));

        }

        #查询认证过用户
        $userModel = new UsersModel(); 
        $user = $userModel->getAuthUser();
        $this->assign('user',$user);
        return $this->fetch();            

    }

    #详情
    public function detail()
    {
        $ProjectModel = new ProjectModel();
        $data = $ProjectModel->find(input('param.id'));
        $data->users;

        $data->start_times = date('Y-m-d H:i:s',$data->start_times);
        $data->end_time = date('Y-m-d H:i:s',$data->end_time);
        $this->assign('data',$data);

        return $this->fetch();
    }

    #审核
    public function project_status()
    {
        $param = input('param.');

        #判断审核状态  1为通过  2为驳回
        if ( $param['type'] == 1) {
            $where['project_status'] = 1;
        }else if( $param['type'] == 2 ){
            $where['project_status'] = 2;
        }

        #查询数据
        $ProjectModel = new ProjectModel();   
        
        $res = $ProjectModel->updateStatus($where,$param['id']); 
        return $res;
    }

    #编辑
    public function edit()
    {
        if (request()->isPost()) {
            $data = $_POST;

            $ProjectModel = new ProjectModel();

            $res  = $ProjectModel->goEdit($data);

            return json(msg($res['code'], $res['data'], $res['msg']));

        }
        $returndata = ProjectModel::where(['id'=>input('param.id')])->find();
        #查询认证过用户
        $userModel = new UsersModel(); 
        $user = $userModel->getAuthUser();
        $this->assign('user',$user);
        $this->assign('data',$returndata);
        return $this->fetch();
    }


    public function upload()
    {   
        // 获取表单上传文件 例如上传了001.jpg
        $file = Request()->file('fmimg');
        // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file->validate(['ext'=>'jpeg,jpg,png,gif'])->move(ROOT_PATH . 'public' .DIRECTORY_SEPARATOR. 'uploads');

        if($info){

            return json(['code'=>1,'data'=>DIRECTORY_SEPARATOR. 'uploads/'.$info->getSaveName()]);
            // 成功上传后 获取上传信息
            // 输出 jpg
            // echo $info->getExtension();
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            // echo $info->getSaveName();
            // 输出 42a79759f284b767dfcb2a0197904287.jpg
            // echo $info->getFilename();
        }else{
            // 上传失败获取错误信息
            return json(['code'=>2,'msg'=>$file->getError()]);
        }
    }
     public function upload1()
    {   
        // 获取表单上传文件 例如上传了001.jpg
        $file1 = Request()->file('fmimg1');
        $file2 = Request()->file('fmimg2');
        $file3 = Request()->file('fmimg3');
        $file4 = Request()->file('fmimg4');
        $file5 = Request()->file('fmimg5');
        $file6 = Request()->file('fmimg6');
if(isset($file1)){
 // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file1->validate(['ext'=>'jpeg,jpg,png,gif'])->move(ROOT_PATH . 'public' .DIRECTORY_SEPARATOR. 'uploads');
}else if(isset($file2)){
     // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file2->validate(['ext'=>'jpeg,jpg,png,gif'])->move(ROOT_PATH . 'public' .DIRECTORY_SEPARATOR. 'uploads');
}else if(isset($file3)){
     // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file3->validate(['ext'=>'jpeg,jpg,png,gif'])->move(ROOT_PATH . 'public' .DIRECTORY_SEPARATOR. 'uploads');
}else if(isset($file4)){
     // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file4->validate(['ext'=>'jpeg,jpg,png,gif'])->move(ROOT_PATH . 'public' .DIRECTORY_SEPARATOR. 'uploads');
}else if(isset($file5)){
 // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file5->validate(['ext'=>'jpeg,jpg,png,gif'])->move(ROOT_PATH . 'public' .DIRECTORY_SEPARATOR. 'uploads');
}else if(isset($file6)){
 // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file6->validate(['ext'=>'jpeg,jpg,png,gif'])->move(ROOT_PATH . 'public' .DIRECTORY_SEPARATOR. 'uploads');
}
       

        if($info){

            return json(['code'=>1,'data'=>DIRECTORY_SEPARATOR. 'uploads/'.$info->getSaveName()]);
            // 成功上传后 获取上传信息
            // 输出 jpg
            // echo $info->getExtension();
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            // echo $info->getSaveName();
            // 输出 42a79759f284b767dfcb2a0197904287.jpg
            // echo $info->getFilename();
        }else{
            // 上传失败获取错误信息
            return json(['code'=>2,'msg'=>$file->getError()]);
        }
    }

}
