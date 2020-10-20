# mysql

## sql分类

+ DDL(Data Definition languages) 语句：数据定义语言【creat、drop、alter】
+ DML(Data Manipulation languages) 语句：数据操纵语句【insert、delete、update、select】
+ DCL(Data Control Languages)语句：数据控制语句【grant、revoke】

### DDL 语句 数据定义语言
>_对数据库内部的对象进行创建、删除、修改的操作语言。与DML最大的区别是DML只是对表内部数据的操作，不涉及到表的定义、结构的修改，更不会涉及到其他对象。DDL语句更多的被数据库管理员所使用_

1.创建数据库
   + 命令的结束符，用;或者\g结束
   + 创建数据库
   > CREATE DATABASE dbname;
   + 查看数据库
   > SHOW DATABASES;
>+ information_schema：主要存储了系统中的一些数据库对象信息。比如用户表信息、列信
   息、权限信息、字符集信息、分区信息等。
>+ cluster：存储了系统的集群信息。
>+ mysql：存储了系统的用户权限信息。
>+ test：系统自动创建的测试数据库，任何用户都可以使用。
+ 选择要操作的数据库
> USE dbname;
+ 查看数据库中创建的所有数据表
> SHOW TABLES;

2.删除数据库
>drop database dbname;

3.创建表
>CREATE TABLE tablename(column_name_1 column_type_1 constraints,column_name_2 column_type_2 constraints, ......column_name_n column_type_n constraints)
>column_name 列的名字 column_type 列的数据类型 contrainst 列的约束条件

4.查看创建的表 
> desc tablename
> show create tabel tablename \G;   \G 使得记录能够按照字段竖着排列 这条命令还可以看到表的engine（存储引擎）和charset（字符集）等信息。

5.删除表
> DROP TABLE tablename;

6.修改表
+ 修改表类型
> ALTER TABLE tablename MODIFY[COLUMN] column_definition[FIRST|AFTER col_name]
+ 增加表字段
> ALTER TABLE tablename ADD[COLUMN] column_definition[FIRST|AFTER col_name]
+ 删除表字段
> ALTER TABLE tablename DROP[COLUMN] col_name
+ 字段改名
> ALTER TABLE tablename CHANGE[COLUMN] old_col_name column_definition[FIRST|AFTER col_name]
+ 修改字段排列顺序
> ALTER TABEL tablename add birth date after ename
+ 修改表名
> ALTER TABEL tablename RENAME[TO] new_tablname

### DML 语句
>_指的是对数据库中的表记录的操作，主要包括表记录的插入（insert）、更新（update）、删除（delete）、和查询（select）。

1.插入记录
> INSERT INTO tablename(field1,field2,...fieldn)VALUES(value1,value2,...valuesn);

2.更新记录
> UPDATE tablename SET field1=value1,field2=value2,...fieldn=valuen[WHERE CONDITION]
>
>update emp a,dept b set a.sal=a.sal*b.deptno,b.deptname=a.ename where
 a.deptno=b.deptno;

3.删除记录
> DELETE FROM tablename[WHERE CONDITION]

4.查询记录
>SELECT * FROM tablename [WHERE CONDITION]
>
>>+查询不重复记录 select distinct deptno from emp;
>
>>+条件查询 select * from emp where ...
>
>>+排序和限制 ORDER BY  lIMIT
>>>SELECT * FROM tablename [WHERE CONDITION] [ORDER BY field1 [DESC|ASC],field2[DESC|ASC],...fieldn[DESC|ASC]]
>>>
>>>SELECT ...[LIMIT offset_start,row_count] 
>>>> offset_start 表示记录的起始偏移量，row_count表示显示的行数
>
>>+聚合
>>>SELECT [field1,field2,……fieldn] fun_name
   FROM tablename
   [WHERE where_contition]
   [GROUP BY field1,field2,……fieldn
   [WITH ROLLUP]]
   [HAVING where_contition]
>>
>>fun_name 表示要做的聚合操作，也就是聚合函数，常用的有 sum（求和）、count(*)（记
  录数）、max（最大值）、min（最小值）。
>>
>>GROUP BY 关键字表示要进行分类聚合的字段，比如要按照部门分类统计员工数量，部门
  就应该写在 group by 后面。
>>
>>WITH ROLLUP 是可选语法，表明是否对分类聚合后的结果进行再汇总。
>>
>>HAVING 关键字表示对分类后的结果再进行条件的过滤。

### DCL 语句
>_是DBA用来管理系统中的对象权限时所使用。_

